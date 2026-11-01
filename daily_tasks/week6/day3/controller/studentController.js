const Student = require('../models/studentModel');
//get all
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find(); 
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//getbyId

exports.getById=async(req,res)=>{
    const id = (req.params.id);
   try{
    const  user = await Student.findById(id);
    if(!user){
        return res.status(404).json({message:"user not found"});
    }
    res.status(200).json(user);
   }catch(err){
        res.status(500).json({ error: err.message });
   }
}
exports.createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    const savedStudent = await student.save();
    res.status(201).json(savedStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
exports.DeleteStudent = async (req, res) => {
    const id =req.params.id;
    
    try{
        const deletedStudent = await Student.findByIdAndDelete(id);
        if(!deletedStudent){
            return res.status(404).json("no such student found");
        }
        res.status(200).json("student deleted")
    }catch(err){
         res.status(400).json({ message: err.message });
    }
}
exports.updateStudent = async (req, res) => {
    const id = req.params.id;
    const updateData = req.body;
    try{
        const updatedStudent = await Student.findByIdAndUpdate(id, updateData, { new: true });
        res.status(200).json(updatedStudent);
        if(!updatedStudent){
            return res.status(404).json("no such student found");
        }     
    }catch(err){
        res.status(400).json({ message: err.message });
    }
}