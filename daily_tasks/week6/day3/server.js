const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const studentRoutes = require("./routes/studentRoutes");
const logger = require("./middelware/logger");
const errorHandling = require("./middelware/errorHandling");

dotenv.config();
const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI;

app.use(express.json());
app.use(logger);

app.use("/", studentRoutes);
app.get("/",(req,res)=>{
  res.status(200).json("express is running ");
})

mongoose.connect(mongoURI).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});

app.use(errorHandling);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});