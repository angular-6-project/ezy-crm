var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//Get Usser Model
require('../models/product')
var product = mongoose.model('Product');


//get product
router.get('/getproduct', function (req, res) {
  product.find(function (err, product){
  if(err){
    console.log(err);
  }
  else {
    res.json(product);
  }
});
});


// product.findById(req.params.id, function (err, post) {
//   if (err) return next(err);
//   res.json(post);
// });

//get one product
router.get('/getproduct/:productNumber', function (req, res) {
  product.find(req.params.productNumber, function (err, product){
  if(err){
    console.log(err);
  }
  else {
    res.json(product);
  }
});
});
// post product
router.post('/addproduct',function(req,res){
  let addProduct = new product(req.body);
  addProduct.save()
    .then(game => {
    res.status(200).json({'adUnit': 'AdUnit in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });




});


//Exports
module.exports = router;
// {"productNumber":"cxcx","productName":"xcvcxv","vehicleMake":"Toyota","brand":"Toyota","productCategory":"Toyota","oemNo":"cxvxcv","productGroup":"Mercedes","unit":"cxvxc","countryOfOrigin":"Mercedes","remarks":"xcvxc","sellingPrice":"ccvc","partsLocation":"cxvcxvc"}
