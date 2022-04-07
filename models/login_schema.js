const mongoose = require('mongoose');

const userInfo = new mongoose.Schema(
    {
        email:{
            type:String,
            require:true
        },
        Password:{
            type:String,
            require:true,
        }
        
    });

module.exports = mongoose.model("loginData" , userInfo);
