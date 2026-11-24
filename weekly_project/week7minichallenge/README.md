# Week 7 Mini Project: Secure Login API & Full Stack Auth System

This project is a complete, ready-to-run Full Stack Authentication application built with the MERN stack (MongoDB, Express, React, Node.js), JWT with Refresh Token rotation, and Tailwind CSS.

## 📁 Project Structure

```
week7minichallenge/
├── backend/
│   ├── controllers/
│   │   ├── authController.js       # Register, Login, Refresh-token, Logout
│   │   └── userController.js       # Profile (GET/PUT), Admin Get All Users
│   ├── middleware/
│   │   ├── authMiddleware.js       # JWT protect and role-based authorize
│   │   └── errorHandler.js         # Centralized error handler
│   ├── models/
│   │   └── User.js                 # User schema with bcrypt & refreshTokens
│   ├── routes/
│   │   ├── authRoutes.js           # /api/register, /api/login, etc.
│   │   └── userRoutes.js           # /api/profile, /api/admin/users
│   ├── utils/
│   │   └── generateTokens.js       # Access & Refresh JWT generators
│   ├── .env                        # Port, Mongo URI, Secrets & Lifetimes
│   ├── .env.example
│   ├── package.json
│   └── server.js                   # Express, Helmet, CORS, Rate Limit
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── AdminRoute.jsx      # Role-guarded route (admin)
    │   │   ├── Navbar.jsx          # Dynamic nav with auth status
    │   │   └── PrivateRoute.jsx    # Protected route (authenticated users)
    │   ├── context/
    │   │   └── AuthContext.jsx     # Global authentication provider
    │   ├── pages/
    │   │   ├── AdminDashboard.jsx  # Admin user management table
    │   │   ├── Login.jsx           # Sign in page
    │   │   ├── Profile.jsx         # User profile & profile update
    │   │   └── Register.jsx        # Registration with validation
    │   ├── services/
    │   │   └── api.js              # Axios with auto token refresh interceptors
    │   ├── App.jsx                 # Routing configuration
    │   ├── App.css
    │   ├── index.css               # Tailwind CSS import
    │   └── main.jsx
    ├── index.html
    ├── vite.config.js
    └── package.json
```

---

## 🚀 How to Run

### 1. Start Backend Server
```bash
cd backend
npm install
npm run dev
```
Backend runs on `http://localhost:5000`.

### 2. Start Frontend App
```bash
cd frontend
npm install
npm run dev
```
Frontend runs on `http://localhost:5173`.

---

## ✨ Features Implemented
- **User Registration**: `POST /api/register` with password hashing (`bcryptjs`).
- **Authentication**: `POST /api/login` issues Access Token (`15m`) and Refresh Token (`7d`).
- **Token Refresh**: `POST /api/refresh-token` with token rotation in MongoDB.
- **Logout**: `POST /api/logout` revokes refresh tokens.
- **Protected Profile**: `GET /api/profile` & `PUT /api/profile` (update name/password).
- **Role-Based Access**: `GET /api/admin/users` restricted to admin role.
- **Security Middlewares**: Helmet HTTP headers, CORS configuration, and Rate Limiting.
- **Axios Interceptor**: Automatically attaches access token and silently refreshes expired tokens.

<img width="1342" height="622" alt="image" src="https://github.com/user-attachments/assets/0bc1dc3d-b038-4912-915c-a657b33d9049" />

<img width="1357" height="623" alt="image" src="https://github.com/user-attachments/assets/2d56896e-cccd-4439-9a01-372bc755e3ef" />

