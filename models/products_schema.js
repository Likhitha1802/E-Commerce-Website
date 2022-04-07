const mongoose=require('mongoose');
const Ecommerce =mongoose.Schema;//database
const Products = new mongoose.Schema({//users collection no 1
    product_id:{
        type:String,
        required:true
    },
    product_name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Double,
        required:true
    },
    store_id:{
        type:String,
        required:true
    },
    category_id:{
        type:String,
        required:true
    },
    sub_category_id:{
        type:String,
        required:true
    },
    brand_id:{
        type:String,
        required:true
    },

});
modules.exports=mongoose.model('Products',Products);