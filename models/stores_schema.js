const mongoose=require('mongoose');
const Ecommerce =mongoose.Schema;//database
const Stores = new mongoose.Schema({//users collection no 1
    store_id:{
        type:String,
        required:true
    },
    store_name:{
        type:String,
        required:true
    },
    manager_id:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
});
modules.exports=mongoose.model('Stores',Stores);