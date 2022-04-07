var express = require("express");
var app = express();
var path = require("path");


app.use(express.json());

app.use(express.urlencoded({extended:false}));

// app.use(express.static("contents"));
// var path = require('path')
// 

app.use(express.static(path.join(__dirname, 'public')));

// app.use(express.static(path.join(__dirname, '..')));

// Mongodb Database Connection

const mongoose = require("mongoose");
const urlencoded = require("body-parser/lib/types/urlencoded");
mongoose.connect("mongodb+srv://Likhitha:Likhi1802@cluster0.jx5im.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useUnifiedTopology : true,
    useNewUrlParser : true,
}).then(() => {
    console.log("Successfully Connected To MongoDB Database.");
}).catch((e) => {
    console.log("Not Connected To MongoDB Database.");
})

const connection = mongoose.connection;
const signupData = require('./models/schema.js');
const loginData = require('./models/login_schema.js');

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/winkel/index.html");
});

app.get("/cart", (req,res) => {
    res.sendFile(__dirname + "/winkel/cart.html");
});
app.get("/checkout", (req,res) => {
    res.sendFile(__dirname + "/winkel/checkout.html");
});
app.get("/shop", (req,res) => {
    res.sendFile(__dirname + "/winkel/shop.html");
});
app.get("/detail", (req,res) => {
    res.sendFile(__dirname + "/winkel/detail.html");
});
app.get("/contact", (req,res) => {
    res.sendFile(__dirname + "/winkel/contact.html");
});
app.get("/electronics", (req,res) => {
    res.sendFile(__dirname + "/winkel/electronics.html");
});
app.get("/jewellery", (req,res) => {
    res.sendFile(__dirname + "/winkel/jewellery.html");
});
app.get("/men", (req,res) => {
    res.sendFile(__dirname + "/winkel/men-fashion.html");
});
app.get("/women", (req,res) => {
    res.sendFile(__dirname + "/winkel/women-fashion.html");
});
app.get("/kids", (req,res) => {
    res.sendFile(__dirname + "/winkel/kids-fashion.html");
});
app.get("/sports", (req,res) => {
    res.sendFile(__dirname + "/winkel/sports.html");
});
app.get("/furniture", (req,res) => {
    res.sendFile(__dirname + "/winkel/furniture.html");
});
app.get("/login", (req,res) => {
    res.sendFile(__dirname + "/winkel/login.html");
});
app.get("/signup", (req,res) => {
    res.sendFile(__dirname + "/winkel/signup.html");
});


app.post('/sendData', function(req,res){
    //res.sendFile(__dirname + '/template/signup.html');
    console.log(req.body);
    // res.send(req.body);
    var obj = new signupData({
        UserName:req.body.name,
        MobileNumber:req.body.mobile,
        Email:req.body.email,
        Password:req.body.password
    })
    signupData.findOne({ $or: [{ UserName:req.body.name }, { MobileNumber:req.body.mobile }, {Email: req.body.email }] }, function(err,docs){
        if(err || docs==null){
            //console.log(err)
            obj.save(function(err, results) {
                if(results){
                   console.log("results"+ results);
                    res.send(results);
                }else{
                    console.log(err)
                    res.send(err);
                }
            })
        } 
        else{
            res.sendStatus(500);
        }
    })
   
});
app.post('/logindata', function(req,res){
    //res.sendFile(__dirname + '/template/signup.html');
    console.log(req.body);
    
    signupData.findOne({Email : req.body.email,Password:req.body.password}, function(err,docs){
        if(err || docs==null){
            //console.log(err)
            res.sendStatus(500)
        } 
        else{
            res.send(docs);
        }
    })
   
});
// app.post('/logindata',async(req,res) =>{
//     try{
//         const email = req.body.email;
//         const password = req.body.password;
//         console.log(`${email} and password is ${password}`);

//     }
//     catch(error){
//         res.status(400).send("invalid email")
//     }
// })


// app.post('/deletedatabyid',(req,res)=>{
//     //res.sendFile(__dirname + '/pages/sample.html');
//     //console.log(req.body);
//     //res.send(req.body);
    
//     // obj.save(function (err, results) {
//     //     if(results){
//     //        console.log(results);
//     //         res.send(results);
//     //     }else{
//     //         res.send(err);
//     //     }
//     // })
//     Sample.findOneAndRemove({_id: req.body.id}, req.body, function(err,results)
// {
//     if(!err){
//         console.log("Deleted");
//     }else{
//         res.send(results)
//     }
// });


// });


app.get('/getRegisterationData',(req,res)=>{
RegisterationData.find(function(err,result){
        if(err || result==null)
        {
            
            console.log(err)
        }
        else if(result!=undefined)
        {
            
            console.log(result)
            res.send(result);
        }
    })
});


app.get('/login',function(req,res){
    res.sendFile(__dirname + "/template/login.html");
});
app.get('/signup',function(req,res){
    res.sendFile(__dirname + "/template/signup.html");
});
app.get('/adminlogin',function(req,res){
    res.sendFile(__dirname + "/template/admin_login.html");
});

app.listen(4000, ()=> console.log("Successfully Server Started"));