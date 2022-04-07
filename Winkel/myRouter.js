
const express = require('express');
const router = express.Router();
var homepath = __dirname+'/Winkel/index.html'
var shoppath = __dirname+'/Winkel/shop.html'
var detailpath = __dirname+'/Winkel/detail.html'
var cartpath = __dirname+'/Winkel/cart.html'
router.get('/',function(req,res){
    res.sendFile(homepath);
});

router.get('/shop',function(req,res){
     res.sendFile(shoppath);
 });
router.get('/detail',function(req,res){
    res.sendFile(detailpath);
});
router.get('/cart',function(req,res){
    res.sendFile(cartpath)
});
module.exports = router;
