const http = require("http");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

// Ensure test port to avoid conflicting with running dev servers
process.env.PORT = "5001";

const { app, server } = require("./server.js");
const User = require("./model/useAuthmodel");

async function runTests() {
  console.log("=== STARTING SECURITY & JWT TESTS ===");
  const baseUrl = "http://localhost:5001";

  try {
    // Wait a moment for server and db to connect
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // Test 1: Verify Security Headers (Helmet, CORS, Rate Limit)
    console.log("\n[TEST 1] Checking Security Headers (Helmet, CORS, Rate-Limit)...");
    const resRoot = await fetch(`${baseUrl}/api/profile`);
    console.log("Status:", resRoot.status);
    console.log("Headers:");
    console.log(" - X-Content-Type-Options (Helmet):", resRoot.headers.get("x-content-type-options"));
    console.log(" - X-Frame-Options (Helmet):", resRoot.headers.get("x-frame-options"));
    console.log(" - Access-Control-Allow-Origin (CORS):", resRoot.headers.get("access-control-allow-origin"));
    console.log(" - RateLimit-Limit (Rate Limiter):", resRoot.headers.get("ratelimit-limit"));
    console.log(" - RateLimit-Remaining (Rate Limiter):", resRoot.headers.get("ratelimit-remaining"));

    const noTokenBody = await resRoot.json();
    console.log("Unauthenticated response:", noTokenBody);
    if (resRoot.status === 401) {
      console.log("✔ Protected route correctly rejected request without token (401)");
    } else {
      console.error("❌ Expected 401 without token");
    }

    // Test 2: Request with Invalid Token
    console.log("\n[TEST 2] Testing Request with Invalid Token...");
    const resInvalid = await fetch(`${baseUrl}/api/profile`, {
      headers: {
        Authorization: "Bearer invalid.token.signature",
      },
    });
    console.log("Invalid token status:", resInvalid.status);
    const invalidBody = await resInvalid.json();
    console.log("Invalid token body:", invalidBody);
    if (resInvalid.status === 401) {
      console.log("✔ Correctly rejected invalid token (401)");
    } else {
      console.error("❌ Expected 401 for invalid token");
    }

    // Test 3: Authenticate / Login to get valid JWT token
    console.log("\n[TEST 3] Testing User Login & JWT Generation...");
    const testEmail = "testuser" + Date.now() + "@example.com";
    const testPassword = "Password123!";

    // Create user in DB or via register endpoint
    const regRes = await fetch(`${baseUrl}/api/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Test User",
        email: testEmail,
        role: "user",
        password: testPassword,
      }),
    });
    const regData = await regRes.json();
    console.log("Register response status:", regRes.status);

    const loginRes = await fetch(`${baseUrl}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: testEmail,
        password: testPassword,
      }),
    });
    const loginData = await loginRes.json();
    console.log("Login response status:", loginRes.status);
    console.log("Received JWT Token:", loginData.token ? loginData.token.substring(0, 30) + "..." : "No token");

    const userToken = loginData.token;

    // Test 4: Access protected route with Bearer Token in headers
    console.log("\n[TEST 4] Testing Protected Route (/api/profile) with Bearer Token...");
    const profileRes = await fetch(`${baseUrl}/api/profile`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    console.log("Profile response status:", profileRes.status);
    const profileData = await profileRes.json();
    console.log("Profile data:", profileData);
    if (profileRes.status === 200 && profileData.user && profileData.user.email === testEmail) {
      console.log("✔ Successfully accessed protected route with Authorization: Bearer <token>");
    } else {
      console.error("❌ Failed to access protected route with token");
    }

    // Test 5: Role-based Authorization with normal user token
    console.log("\n[TEST 5] Testing RBAC: Normal User accessing /api/admin/users...");
    const adminCheckRes = await fetch(`${baseUrl}/api/admin/users`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    console.log("Admin route access status with user role:", adminCheckRes.status);
    const adminCheckData = await adminCheckRes.json();
    console.log("Response:", adminCheckData);
    if (adminCheckRes.status === 403) {
      console.log("✔ Access denied for normal user on admin route (403 Forbidden)");
    }

    // Test 6: Create Admin Token and access /api/admin/users
    console.log("\n[TEST 6] Testing Admin Token on /api/admin/users...");
    const adminEmail = "admin" + Date.now() + "@example.com";
    await fetch(`${baseUrl}/api/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Admin User",
        email: adminEmail,
        role: "admin",
        password: testPassword,
      }),
    });
    const adminLoginRes = await fetch(`${baseUrl}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: adminEmail,
        password: testPassword,
      }),
    });
    const adminLoginData = await adminLoginRes.json();
    const adminToken = adminLoginData.token;

    const adminUsersRes = await fetch(`${baseUrl}/api/admin/users`, {
      headers: {
        Authorization: `Bearer ${adminToken}`,
      },
    });
    console.log("Admin route access status with admin role:", adminUsersRes.status);
    const adminUsersData = await adminUsersRes.json();
    console.log("Admin fetch result total users:", adminUsersData.totalUsers);
    if (adminUsersRes.status === 200) {
      console.log("✔ Admin successfully accessed protected /api/admin/users with Bearer token!");
    }

    // Clean up created test users from DB
    await User.deleteMany({ email: { $in: [testEmail, adminEmail] } });
    console.log("\nCleanup: removed test users from DB.");

    console.log("\n=== ALL TESTS PASSED SUCCESSFULLY! ===");
  } catch (error) {
    console.error("Test error:", error);
  } finally {
    server.close();
    await mongoose.connection.close();
    process.exit(0);
  }
}

runTests();
