const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const logger = require("./middleware/logger");
const errorHandling = require("./middleware/errorHandling");
const routes = require("./routes/productRoutes");
dotenv.config();

app.use(express.json());
app.use(logger);

app.use("/",routes);

app.get("/",(req,res)=>{
  res.status(200).json("express is running ");
})


mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});

app.use(errorHandling);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});