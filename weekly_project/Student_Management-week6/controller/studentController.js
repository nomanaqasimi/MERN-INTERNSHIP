const Students = require("../model/studentModel");

//parent route
exports.parentRoute = (req, res) => {
    res.send("Welcome to Student Management System");
}

//get all students
exports.getAllStudents = async (req, res, next) => {
    try {
       const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const students = await Students.find().limit(limit).skip(skip);
        res.status(200).json(students);
    }
    catch (error) {
        next(error);
    }
}

exports.addStudent= async(req,res,next)=>{
   try{ const newStudent = new Students(req.body);
    if(!newStudent.name ||!newStudent.rollNo || !newStudent.department || !newStudent.year||!newStudent.email  ){
        res.status(400).json("all fields are rquired")
    }
    const result = await newStudent.save();
    res.status(201).json({
        messgae:"student created",
        student : newStudent
    });
   }catch(err){
    next(err)
   }
}
exports.addMany= async (req,res,next)=>{
    try{
        const newStudentsArray = req.body;
        if(!Array.isArray(newStudentsArray)||newStudentsArray.lenght ==0){
            return res.status(400).json("please return an array of studnets in body")
        }
        const savedStudents = await Students.insertMany(newStudentsArray);
        res.status(201).json(savedStudents);

    }catch(err){
        next(err);
    }
}
exports.getById = async (req,res,next)=>{
    try{
        const id = req.params.id;
        const student = await Students.findById(id);
        if(!student){
          return  res.status(404).json("no such student found");
        }
        res.status(200).json(student);
    }catch(err){
        next(err);
    }
}
exports.Studentupdate=async (req,res,next)=>{
    try{
        const id = req.params.id;
        const updateData = req.body;
        const updatedStudent = await Students.findByIdAndUpdate(id,updateData,{new:true});
        res.status(200).json(updatedStudent);
    }catch(err){
        next(err);
    }
}
exports.deleteById=(req,res,next)=>{
    
}
exports.deleteMany = async (req, res, next) => {
    try {
        const { ids } = req.body; 

        if (!ids || !Array.isArray(ids) || ids.length === 0) {
            return res.status(400).json({ message: "Please provide an array of student IDs." });
        }

        const result = await Students.deleteMany({});
        
        res.status(200).json({ message: `${result.deletedCount} students deleted` });
    }
    catch (error) {
        next(error);
    }
}