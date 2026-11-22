const express = require("express");
const  userAuthController  = require("../controller/userAuthController");
const router = express.Router();

router.get("/getbyEmail/:email",userAuthController.getUser);
router.post("/register",userAuthController.registerUser);


module.exports = router;