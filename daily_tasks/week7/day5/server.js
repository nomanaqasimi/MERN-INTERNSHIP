const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const dotenv = require("dotenv");
dotenv.config();

const dbconnect = require("./config/db.js");
const errorhandling = require("./middleware/errorHandling.js");
const logger = require("./middleware/logger.js");
const routes = require("./routes/userAuthRoutes.js");

const app = express();

// Security Middlewares
app.use(helmet());
app.use(cors({
origin: ["http://localhost:5173"],
methods: ["GET", "POST", "PUT", "DELETE"],
}));

// Rate Limiting Middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 15, // Limit each IP to 100 requests per 15-minute window
  message: {
    error: "Too many requests from this IP, please try again after 15 minutes",
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
app.use(limiter);

// Core Middlewares
app.use(express.json());
app.use(logger);

// Database Connection
dbconnect();

// Routes
app.use("/api", routes);

app.get("/",(req,res)=>{
  return res.json({status:200,message:"Get route hit The Paak server of Nomana",location:"Dr. C.V.Raman University",device:"Lenevo I phone Jio Pro Max"});
})

// Error Handling Middleware
app.use(errorhandling);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`server is running on the ${PORT}`);
});

module.exports = { app, server };

