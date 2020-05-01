const Order = require('../models/OrderModel');

//DESC: Handles placing the order
//URL: /api/orders/place-order
//REQUEST: GET
exports.placeOrder = async (req, res) => {
	try {
		const {
			userId,
			products,
			orderTotal,
			paymentStatus,
			deliveryStatus,
		} = req.body;

		const newOrder = new Order({
			userId,
			products,
			orderTotal,
			paymentStatus,
			deliveryStatus,
		});

		const savedOrder = await Order.create(newOrder);

		return res.status(201).json({
			success: true,
			message: 'Order placed successfully',
			order: {
				userId: savedOrder.userId,
				products: savedOrder.products,
				orderTotal: savedOrder.orderTotal,
				paymentStatus: savedOrder.paymentStatus,
				deliveryStatus: savedOrder.deliveryStatus,
			},
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			message: 'Server error',
			error: err.message,
		});
	}
};

exports.getAllOrders = async (req, res) => {
	try {
		const orders = await Order.find({}).populate({
			path: 'userId',
			model: 'User',
		});

		return res.status(200).json({
			success: true,
			message: 'All orders fetched successfully',
			orders: orders.map((order) => {
				return {
					user: order.userId,
					paymentStatus: order.paymentStatus,
					deliveryStatus: order.deliveryStatus,
					orderTotal: order.orderTotal,
					products: order.products,
				};
			}),
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			message: 'Server error',
			error: err.message,
		});
	}
};

exports.getUserOrders = async (req, res) => {
	try {
		const userId = req.params.id;

		const userOrder = await Order.find({ userId }).populate({
			path: 'userId',
			model: 'User',
		});

		return res.status(200).json({
			success: true,
			message: 'Orders Fetched',
			count: userOrder.length,
			orders: userOrder.map((order) => {
				return {
					userId: order.userId,
					paymentStatus: order.paymentStatus,
					deliveryStatus: order.deliveryStatus,
					products: order.products,
				};
			}),
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: 'Server error',
			error: error.message,
		});
	}
};
