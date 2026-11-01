const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT || 3000
app.use(express.json());

mongoose
.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected Successfully ")).catch((err)=>console.log("error", err));

app.listen(5000,()=>
console.log("server is runnig on port 5000"));