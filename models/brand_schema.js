const mongoose=require('mongoose');
// const Ecommerce =mongoose.Schema;//database
const Brand = new mongoose.Schema({//users collection no 1},
    brand_id:{
        type:String,
        required:true
    },
    brand_name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },

});
modules.exports=mongoose.model('Brand',Brand);