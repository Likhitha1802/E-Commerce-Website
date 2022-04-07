const mongoose=require('mongoose');
const Ecommerce =mongoose.Schema;//database
const Sub_category = new mongoose.Schema({//users collection no 1
    sub_categoty_id:{
        type:String,
        required:true
    },
    sub_category_name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category_id:{
        type:String,
        required:true
    },
});
modules.exports=mongoose.model('Sub_category',Sub_category);