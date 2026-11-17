const mongoose = require("mongoose");
const CourseSchema = new mongoose.Schema({
    courseName:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required: true
    },
    fee:{
        type:Number,
        required:true
    }
})
module.exports = mongoose.model("Course",CourseSchema);