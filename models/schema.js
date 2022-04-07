const mongoose = require('mongoose');

const userData = new mongoose.Schema(
    {
        UserName:{
            type:String,
            require:true
        },
        MobileNumber:{
            type:Number,
            require:true
        },
        Email:{
            type:String,
            require:true
        },
        Password:{
            type:String,
            require:true,
        }
        
    });

module.exports = mongoose.model("signupData" , userData);
