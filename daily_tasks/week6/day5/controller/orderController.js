const orders = require('../models/orderModel');

exports.getAllOrders = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const totalOrders = await orders.countDocuments();

        const allOrders = await orders.find().populate('user', 'name').skip(skip).limit(limit);
        if (!allOrders || allOrders.length === 0) {
            return res.status(404).json({ message: "No orders found for this page." });
        }
        res.status(200).json({
            page: page,
            totalOrders: totalOrders,
            totalPages: Math.ceil(totalOrders / limit),
            orders: allOrders
        });
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
exports.getUserOrders = async (req, res, next) => {
    try {
        const userId = req.params.userId; 

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const totalOrders = await orders.countDocuments({ user: userId });

        const userOrders = await orders.find({ user: userId })
                                       .populate('user', 'name')
                                       .skip(skip)
                                       .limit(limit);

        if (!userOrders || userOrders.length === 0) {
            return res.status(404).json({ message: "No orders found for this user." });
        }

        res.status(200).json({
            page: page,
            totalOrders: totalOrders,
            totalPages: Math.ceil(totalOrders / limit),
            orders: userOrders
        });
        
    } catch (error) {
        next(error);
    } 
};