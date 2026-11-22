const express = require("express");
const  userAuthController  = require("../controller/userAuthController");
const router = express.Router();
const {protect,authorizeRoles}= require("../middleware/auth");

router.get("/users",userAuthController.getAllUsers);
router.get(
  "/admin/users",
  protect,
  authorizeRoles("admin"),
  userAuthController.getAllUsersByAdmin
);

router.put("/admin/users/:id", protect, authorizeRoles("admin"), userAuthController.updateUserByAdmin);
router.get("/getbyEmail/:email",userAuthController.getUser);
router.post("/register",userAuthController.registerUser);
router.post("/login",userAuthController.loginUser);


module.exports = router;