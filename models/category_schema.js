const mongoose=require('mongoose');
// const Ecommerce =mongoose.Schema;//database
const Category = new mongoose.Schema({//users collection no 1},
    category_id:{
        type:String,
        required:true
    },
    category_name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },

});
modules.exports=mongoose.model('Category',Category);