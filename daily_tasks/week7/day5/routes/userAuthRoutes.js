const express = require("express");
const userAuthController = require("../controller/userAuthController");
const router = express.Router();
const { protect, authorizeRoles } = require("../middleware/auth");

// Public routes
router.post("/register", userAuthController.registerUser);
router.post("/login", userAuthController.loginUser);

// Protected routes (JWT Authentication required)
router.get("/profile", protect, userAuthController.getProfile);
router.get("/users", protect, userAuthController.getAllUsers);
router.get("/getbyEmail/:email", protect, userAuthController.getUser);

// Role-based protected routes (Admin only)
router.get(
  "/admin/users",
  protect,
  authorizeRoles("admin"),
  userAuthController.getAllUsersByAdmin
);

router.put(
  "/admin/users/:id",
  protect,
  authorizeRoles("admin"),
  userAuthController.updateUserByAdmin
);

module.exports = router;