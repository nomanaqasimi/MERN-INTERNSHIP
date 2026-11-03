const express = require("express");
const router = express.Router();
const Controller = require("../controller/productController");

router.get("/products", Controller.getAllProducts);
router.post("/products", Controller.addProduct);
router.post("/products/bulk", Controller.addMultipleProducts);
router.get("/products/filter", Controller.filterProducts);
router.get("/products/:id", Controller.getProductById);

module.exports = router;