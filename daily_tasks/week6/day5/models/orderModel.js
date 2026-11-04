const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,

    },
    quantity:{
        type:Number,
        default:1
    },
    price:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Orders', orderSchema);