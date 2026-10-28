//REQUIREMENTS
// console.log("runnning")
const express=require("express");
const app = express();
const logger = require("./middleware/logger");
const erorrHandling = require("./middleware/errorHandling");
const routes = require("./routes/productRoutes")

//ENV
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 3000;

//MIDDLEWARE
app.use(express.json());
app.use(logger);

//routes
app.use(routes);

//ERORHANDLING
app.use(erorrHandling);

//SERVER
app.listen(port,()=>{
    console.log(`app is running on port ${port}`)
})
