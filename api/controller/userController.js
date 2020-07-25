const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const jwtKey = require('../../config/config').jwtKey;
const User = require('../models/UserModel');

//DESC: Signs up our user to our database
//URL: '/api/users/auth/signup'
//REQUEST TYPE: POST
exports.signup = async (req, res) => {
	try {
		const { firstname, lastname, email, password } = req.body;

		//Check if User exist via email field

		email.toLowerCase();

		const user = await User.find({ email });

		if (user.length > 0) {
			return res.status(400).json({
				success: false,
				message: 'User already exist',
			});
		} else {
			const newUser = new User({
				firstname,
				lastname,
				email,
				password,
			});

			const hash = await bcrypt.hash(password, 10);

			newUser.password = hash;

			const savedUser = await newUser.save();

			return res.status(200).json({
				success: true,
				message: 'Signed Up Successfuly',
				user: {
					id: savedUser._id,
					firstname: savedUser.firstname,
					lastname: savedUser.lastname,
					email: savedUser.email,
				},
			});
		}
	} catch (err) {
		return res.status(500).json({
			success: false,
			message: 'Server Error',
			error: err.message,
		});
	}
};

exports.signin = async (req, res) => {
	try {
		const { email, password } = req.body;

		email.toLowerCase();

		//Check if email is valid
		const user = await User.findOne({ email });

		if (!user) {
			return res.status(400).json({
				success: false,
				message: 'User does not exist',
			});
		} else {
			//Validate password
			const isValid = await bcrypt.compare(password, user.password);

			if (!isValid) {
				return res.status(404).json({
					success: false,
					message: 'Authorization Failed',
				});
			} else {
				//Generate token with jwt
				//The jwt.sign() takes in three arguments -
				//1. The payload which is user information
				//2. the secret jwt jey
				//3. an expiration duration
				const token = await jwt.sign(
					{ email: user.email, id: user._id },
					process.env.JWT_KEY,
					{
						expiresIn: '1h',
					}
				);

				return res.status(201).json({
					success: true,
					message: 'Authentication succeeded',
					user,
					token,
				});
			}
		}
	} catch (err) {
		return res.status(500).json({
			success: false,
			message: 'Server Error',
			error: err.message,
		});
	}
};
