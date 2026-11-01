const express = require("express");
const router = express.Router();
const studentController = require("../controller/studentController");

router.get("/students", studentController.getAllStudents);
router.get("/students/:id", studentController.getById);
router.post("/students", studentController.createStudent);
router.delete("/students/:id", studentController.DeleteStudent);
router.put("/students/:id", studentController.updateStudent);


module.exports = router;
