const express = require('express');
const { getSingleProduct, getProducts } = require('../controllers/productcontroller');
// const { get } = require('mongoose');
const router = express.Router();




router.route('/products').get(getProducts);
router.route('/product/:id').get(getSingleProduct);



module.exports = router;
