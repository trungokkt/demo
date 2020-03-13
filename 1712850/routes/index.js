let express = require('express');
// var router = express.Router();

let app = express();
let categoryC=require('../Controller/CategoryC');
//the view engine
 
//define your router here


app.get('/',async (req,res)=>{
    categoryC
            .getAll()
            .then(data => {
                res.locals.categoryC=data;
                res.render('index');
            })
            .catch()

});
app.get('/sync',(req,res)=>{
    let models=require('../models');
    models.sequelize.sync()
    .then(()=>{
        res.send('database sync completed!');
    });
});
// app.get('/:page',(req,res) =>{
//     let banners = {
//         blog:           'Our Blog',
//         category:       'Shop category',
//         cart:           'Shopping Cart',
//         checkout:       'Product Checkout',
//         confirmation:   'Order Confirmation',
//         contact:        'Contact Us',
//         login:          'Login / Register',
//         register:       'Register',
//     };
//     let page=req.params.page;
//     res.render(page,{banner: banners[page]});
// })

module.exports = app;

 
