const mongoose = require('mongoose');
// const uri = require('./config').uri;

const dbConnection = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true,
		});

		console.log(`Database connected ${conn.connection.host}`);
	} catch (err) {
		console.log(`Database Connection Failure: ${err.message}`);
	}
};

module.exports = dbConnection;
