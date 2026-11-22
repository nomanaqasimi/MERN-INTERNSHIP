const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();
const dbconnect = require("./config/db.js");

const errorhandling = require("./middleware/errorHandling.js");
const logger = require("./middleware/logger.js");

const routes = require('./routes/userAuthRoutes.js')

app.use(express.json());
app.use(logger);
dbconnect();

app.use("/api",routes);

app.use(errorhandling);
app.listen(process.env.PORT,()=>{
console.log(`server is running on the ${process.env.PORT}`)
});