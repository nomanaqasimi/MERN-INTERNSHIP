const mongoose = require("mongoose");
require("dotenv").config();

exports.connectDB = async () => {
    mongoose.connect(process.env.MONGO_URI).then(()=>console.log("MongoDB connected successfully")).catch((err)=>console.log(err)); 
}