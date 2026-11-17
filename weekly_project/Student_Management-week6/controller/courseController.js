const Course = require("../model/courseModel");

exports.getAllCourses = async(req,res,next)=>{
    try{
        const page  = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit)
    }catch(err){

    }
}