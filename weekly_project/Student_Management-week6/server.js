const express = require("express");
const app = express();
require("dotenv").config();
const dbConnect = require("./config/db");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandling");
const studentRoutes = require("./routes/studentRoutes");

//middleware
app.use(express.json());
app.use(logger);

//routes
app.use("/",studentRoutes);

//connect to database
dbConnect.connectDB();

//error handler
app.use(errorHandler);

//server
app.listen(process.env.PORT,()=>{
    console.log(`server is runnig on ${process.env.PORT}`)
})