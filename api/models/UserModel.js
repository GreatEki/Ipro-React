const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	firstname: {
		type: String,
		required: true,
	},

	lastname: { type: String, required: true },

	email: { type: String, required: true },

	password: { type: String, unique: true, required: true },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
