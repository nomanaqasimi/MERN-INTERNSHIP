# Week 7 - Day 5: Security Packages & JWT Authentication

## ✔ Task 1 — Install and Configure Security Packages

### 1. Installation
The following security packages were installed:
```bash
npm install cors helmet express-rate-limit
```
*(Also installed `jsonwebtoken` to ensure JWT signing and verification)*

### 2. Middleware Configuration in `server.js`
- **Helmet**: Secures the Express application by setting various HTTP response headers (`X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, etc.).
- **CORS**: Enables Cross-Origin Resource Sharing with customizable policies.
- **Express Rate Limit**: Protects the API from brute-force and DDoS attacks by limiting requests per IP address.

```javascript
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

// Security Middlewares
app.use(helmet());
app.use(cors());

// Rate Limiting Middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15-minute window
  max: 100, // Limit each IP to 100 requests per windowMs
  message: {
    error: "Too many requests from this IP, please try again after 15 minutes",
  },
  standardHeaders: true, // Return rate limit info in `RateLimit-*` headers
  legacyHeaders: false, // Disable `X-RateLimit-*` headers
});
app.use(limiter);
```

---

## ✔ Task 2 — Enable JWT Authentication

### Protected Routes
JWT Authentication is enforced via the `protect` middleware in `middleware/auth.js`:
- `GET /api/profile` - Returns authenticated user details
- `GET /api/users` - Fetches all users (requires authentication)
- `GET /api/getbyEmail/:email` - Fetches single user (requires authentication)
- `GET /api/admin/users` - Fetches all users for admin (requires `admin` role)
- `PUT /api/admin/users/:id` - Updates user by admin (requires `admin` role)

### Testing with Headers
Include the JWT token in the request headers:
```http
Authorization: Bearer <your-token>
```

### Test Scenarios & Results:

#### 1. Requesting without Token
- **Request**: `GET http://localhost:5000/api/profile`
- **Headers**: *(None)*
- **Status**: `401 Unauthorized`
```json
{
  "error": "not authorized,token missing"
}
```

#### 2. Requesting with Invalid / Tampered Token
- **Request**: `GET http://localhost:5000/api/profile`
- **Headers**:
  ```http
  Authorization: Bearer invalid.token.signature
  ```
- **Status**: `401 Unauthorized`
```json
{
  "error": "not authorized, token invalid or expired"
}
```

#### 3. Login to Obtain Valid Token
- **Request**: `POST http://localhost:5000/api/login`
- **Body**:
```json
{
  "email": "user@example.com",
  "password": "Password123!"
}
```
- **Response**:
```json
{
  "message": "user logged in successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "name": "User Name",
    "role": "user"
  }
}
```

#### 4. Access Protected Route with Bearer Token
- **Request**: `GET http://localhost:5000/api/profile`
- **Headers**:
  ```http
  Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
  ```
- **Status**: `200 OK`
```json
{
  "message": "User profile fetched successfully",
  "user": {
    "_id": "6b051db9b8e1855b2ff4280a",
    "name": "User Name",
    "email": "user@example.com",
    "role": "user"
  }
}
```

#### 5. Role-Based Access Control (Admin Routes)
- **Normal user** accessing `GET /api/admin/users`:
  - **Status**: `403 Forbidden`
  ```json
  {
    "error": "Access denied: insufficient role"
  }
  ```
- **Admin user** accessing `GET /api/admin/users`:
  - **Status**: `200 OK`
  ```json
  {
    "message": "All users fetched successfully",
    "admin": "Admin Name",
    "totalUsers": 7,
    "users": [ ... ]
  }
  ```
