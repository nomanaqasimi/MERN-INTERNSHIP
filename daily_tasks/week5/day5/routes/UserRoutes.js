const express = require("express");
const router = express.Router();
const userController = require("../controller/userController.js");

router.get("/",userController.getAll);
router.get("/users",userController.getAll);
router.get("/users/:id",userController.getUserById);
router.get("/users/:id/:section",userController.getParameters);

module.exports = router;