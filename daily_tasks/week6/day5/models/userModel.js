const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name:{type:String,
        required:true,
        validate:{
            validator:function(value){
                return /^[A-Za-z\s]+$/.test(value)&&value.length >= 3;
            },
            message:"Name must contain only letters and spaces and be at least 3 characters long"
        }
    },
    password:{type:String,
        required:true,
        validate:{
            validator:function(value){
                return value.length >= 8;
            },
            message:"Password must be at least 8 characters long"
        }
    },
    date:{type:Date,
        required:true,
        default:Date.now
    }
    });
    module.exports = mongoose.model("User",userSchema);

