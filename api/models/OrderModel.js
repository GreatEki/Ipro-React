const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user',
		required: true,
	},

	products: {
		type: Array,
		default: [],
		required: true,
	},

	orderTotal: {
		type: Number,
		required: true,
	},

	paymentStatus: {
		type: String,
	},

	deliveryStatus: {
		type: String,
	},
	orderDate: {
		type: String,
	},
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
