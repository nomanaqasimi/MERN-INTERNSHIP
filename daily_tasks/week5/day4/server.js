const express = require("express");
const app=express();

app.use(express.json());

//logger(custom middleware)

const logger = require("./middleware/logger");
app.use(logger)

const userRoutes=require("./routes/userRoutes");
app.use("/",userRoutes);

//error handling (custom middleware)

const errorHandling=require("./middleware/errorHandling");
app.use(errorHandling);

app.listen(3000,()=>{
console.log("server is running on port 3000");
})