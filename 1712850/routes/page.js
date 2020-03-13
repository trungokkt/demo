let express = require('express');
// var router = express.Router();
let app = express();

app.get('/',(req,res)=>{
    res.render('category',{banner:'Shop Category'});
});
app.get('/single-product',(req,res)=>{
    res.render('single-product',{banner:'Shop Single'});
});
app.get('/listProduct',async (req,res)=>{
    const r= await MProduct.Load_products();
    return res.json({'Product': r});
});
module.exports = app;