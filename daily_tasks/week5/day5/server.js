require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

const logger = require("./utils/logger.js");
app.use(logger)

const routes=require("./routes/UserRoutes.js")

app.use("/",routes)

const errorHandling=require("./middleware/errorHandling.js")
app.use(errorHandling);

const port = process.env.PORT || 3000 
app.listen(port,()=>{
console.log(`server is running on port: ${port}`)
})