const express = require("express");
const router = express.Router();
const studentController = require("../controller/studentController");

router.get("/", studentController.parentRoute);
router.get("/students", studentController.getAllStudents);
router.get("/students/:id",studentController.getById);
router.post("/students", studentController.addStudent);
router.put("/students/:id",studentController.Studentupdate)
router.post("/students/addmany",studentController.addMany)
router.delete("/students/deletemany",studentController.deleteMany)

module.exports = router;