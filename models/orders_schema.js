const mongoose=require('mongoose');
const Ecommerce =mongoose.Schema;//database
const Orders = new mongoose.Schema({//users collection no 1
    order_id:{
        type:String,
        required:true
    },
    items:{
        type:array[object],
        required:true
    },
    amount:{
        type:Double,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    user_id:{
        type:String,
        required:true
    },
});
modules.exports=mongoose.model('Orders',Orders);
