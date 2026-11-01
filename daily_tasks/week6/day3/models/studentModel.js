const mongoose = require("mongoose");
mongoose.studentSchema = new mongoose.Schema({
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

module.exports = mongoose.model("Student", mongoose.studentSchema);