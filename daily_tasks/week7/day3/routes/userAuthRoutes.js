const express = require("express");
const  userAuthController  = require("../controller/userAuthController");
const router = express.Router();

router.get("/users",userAuthController.getAllUsers);

router.get("/getbyEmail/:email",userAuthController.getUser);
router.post("/register",userAuthController.registerUser);
router.post("/login",userAuthController.loginUser);


module.exports = router;