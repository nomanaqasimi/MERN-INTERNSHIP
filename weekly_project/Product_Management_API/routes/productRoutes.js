const express = require("express");
const router = express.Router();
 const productController =require("../controller/productController")
 router.get("/",(req,res)=>{
    res.status(200).json({
      message:  "express is running"
    })
 })
 router.get("/products",productController.getAll)
  router.get("/products/search",productController.searchProducts)
 router.get("/products/:id",productController.getById);
 router.post("/products",productController.addProduct)
 router.put("/products/:id",productController.updateProduct)
 router.delete("/products/:id",productController.deleteProduct)

 

 module.exports = router;