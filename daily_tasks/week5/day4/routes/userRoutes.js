const express = require("express");
const router = express.Router();
const {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser
} = require("../controller/userController");

//endpoints
router.get("/", (req, res) => {
    res.send("Express API is working...");
});
router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users",createUser);
router.delete("/users/:id",deleteUser);
router.put("/users/:id",updateUser);

module.exports = router;