let products = require("../data/product")

exports.getAll=(req,res)=>{
    res.status(200).json(products);
}
exports.getById=(req,res)=>{
    const Id = parseInt(req.params.id);
    const product = products.find((p)=>p.id === Id);
    if(!product){
        return res.status(404).json("product not found");
    }
    res.status(200).json(product);
}
exports.addProduct=(req,res)=>{
    const newId= products.length > 0 
        ? Math.max(...products.map(p => p.id)) + 1 
        : 1;
  const newProduct=  {
                    id : newId,
                    name : req.body.name,
                    price :Number(req.body.price)
    }
    products.push(newProduct);
    res.status(201).json({
        message:"product created!",
    product: newProduct})
}
exports.updateProduct=(req,res)=>{
    const Id = parseInt(req.params.id);
    const product = products.find((p)=>p.id ===Id);
    if(!product){
       return res.status(404).json("product not found");
    }
    product.name = req.body.name || name;
    product.price = req.body.price || price;
    res.status(200).json({
        message:"product updated",
        details:product
    })
}
exports.deleteProduct=(req,res)=>{
    const id=parseInt(req.params.id);
    const product = products.find((p)=> p.id ===id);
    if(!product){
        return res.status(404).json("product does not exist");
    }
   const indx = products.findIndex((p)=> p.id ===id);
    products.splice(indx,1);
    res.status(200).json({
        message:"product is deleted",
        details:product
    });
}
exports.searchProducts = (req, res) => {
const name = req.query.name.toLowerCase();
const filtered = products.filter(p =>
p.name.toLowerCase().includes(name)
);

res.status(200).json(filtered);
};