const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {  
    type: Number,
    required: true,
  },
  stream:{
    type: String,
    default: "general",
  }
});

module.exports = mongoose.model("Student", studentSchema);