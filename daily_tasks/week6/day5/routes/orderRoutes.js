const express = require('express');
const router = express.Router();
const orderController = require('../controller/orderController');

router.get('/orders', orderController.getAllOrders);
router.post('/orders', orderController.createOrder);
router.post('/orders/addMany/:id', orderController.addManyOrders);


module.exports = router;