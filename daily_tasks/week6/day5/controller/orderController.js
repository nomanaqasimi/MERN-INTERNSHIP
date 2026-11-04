const orders = require('../models/orderModel');

exports.getAllOrders = async (req, res, next) => {
    try {
        const allOrders = await orders.find().populate('user', 'name email'); 
        res.status(200).json(allOrders);
    } catch (error) {
        next(error);
    } 
}
exports.createOrder = async (req, res, next) => {
    try {
        const newOrder = new orders(req.body);
        if (!newOrder.productName || !newOrder.user || !newOrder.price) {
            return res.status(400).json({ error: "All fields are required" });
        }
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        next(error);
    }
}
exports.addManyOrders = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const newOrdersArray = req.body;
        if (!Array.isArray(newOrdersArray) || newOrdersArray.length === 0) {
            return res.status(400).json({ error: "Please provide an array of orders" });
        }
        const finalArray=newOrdersArray.map(order => {
            return{
                productName: order.productName,
                price: order.price,
                user: userId
            };
        });
        const savedOrders = await orders.insertMany(finalArray);

        res.status(201).json(savedOrders);
    } catch (error) {
        next(error);
    }
}