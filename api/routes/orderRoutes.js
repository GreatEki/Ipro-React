const express = require('express');
const router = express.Router();

const {
	placeOrder,
	getAllOrders,
	getUserOrders,
} = require('../controller/orderController');

router.route('/place-order').post(placeOrder);

router.route('/').get(getAllOrders);

router.route('/:id').get(getUserOrders);

module.exports = router;
