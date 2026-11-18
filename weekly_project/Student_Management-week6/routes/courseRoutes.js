const express = require("express")
const router = express.Router();
const courseController = require("../controller/courseController");

router.get("/courses",courseController.getAllCourses);
router.post("/courses",courseController.addCourse);
router.post("/courses/addmany",courseController.addmanyCourse)

module.exports = router;