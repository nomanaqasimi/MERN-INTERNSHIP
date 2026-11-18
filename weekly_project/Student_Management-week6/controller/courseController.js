const Course = require("../model/courseModel");

exports.getAllCourses = async(req,res,next)=>{
    try{
        const page  = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;
        const skip = (page - 1) * limit;

        const totalCourses = await Course.find().skip(skip).limit(limit);
        if(!totalCourses){
            return res.status(404).json("no courses found");
        }
        res.status(200).json(totalCourses);
    }catch(err){
        next(err);
    }
}
exports.addCourse = async(req,res,next)=>{
    try{
        const newCourse = new Course(req.body);
        if(!newCourse.courseName|| !newCourse.duration || !newCourse.fee){
            return res.status(400).json("all fields are required(name,duration,fee)");
        }
        const savedCourse = await newCourse.save();
        res.status(201).json(savedCourse);
    }catch(err){
        next(err);
    }
}
exports.addmanyCourse = async(req,res,next)=>{
    try{
        const newCourseArray = req.body
       if (!Array.isArray(newCourseArray) || newCourseArray.length === 0){
            return res.status(400).json("please provide the array of courses");
        }
        const savedCourse = await Course.insertMany(newCourseArray);
        res.status(201).json({"message": "created", savedCourse});
    }catch(err){
        next(err);
    }
}