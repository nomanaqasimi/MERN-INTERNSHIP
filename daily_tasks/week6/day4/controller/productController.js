const Product = require("../models/productModels");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  }catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  }catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.addProduct = async (req, res,next) => {
    try {
        const {name,price,category}=req.body;
        if(!name || !price || !category){
           return res.status(400).json({message:"Please provide all required fields"});
        }
        const newProduct = new Product({name,price,category});
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    }catch (error) {
        next(error);
    }
}
exports.filterProducts = async (req, res,next) => {
  const { name,category, minPrice, maxPrice ,page} = req.query;
    const filter = {};
    if(name) {
      filter.name = { $regex: name, $options: "i" };
    }
    if(category) {
      filter.category = category;
    }
    if(minPrice || maxPrice) {
      filter.price = {};
      if(minPrice) {
        filter.price.$gte = parseFloat(minPrice);
      }
      if(maxPrice) {
        filter.price.$lte = parseFloat(maxPrice);
      }
    }
    const pageSize = 10;
    const currentPage = parseInt(page) || 1;
    const skip = (currentPage - 1) * pageSize;
    
    try{
      const products = await Product.find(filter).skip(skip).limit(pageSize);
      res.status(200).json(products);
    }catch (error) {
     next(error);
    }
  
}
exports.addMultipleProducts = async (req, res, next) => {
  try {
    const productsArray = req.body; 

    if (!Array.isArray(productsArray) || productsArray.length === 0) {
      return res.status(400).json({ 
        message: "Data must be an array of products and cannot be empty!" 
      });
    }

    const savedProducts = await Product.insertMany(productsArray);

    res.status(201).json({
      message: `${savedProducts.length} products successfully added!`,
      data: savedProducts
    });

  } catch (error) {
    next(error);
  }
};