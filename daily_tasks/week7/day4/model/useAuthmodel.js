const mongoose = require("mongoose");
const userAuthSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:[true,"email must be unique"]
  },
  role:{
    type:String,
    default:"user"
  },
  password:{
        type:String,
        required:[true,"password is required"]
    }
    
})
module.exports = mongoose.model("userAuth",userAuthSchema);