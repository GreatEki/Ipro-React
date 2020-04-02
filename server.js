const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

//Initialize express
const app = express();

//express and body-parser middleware
app.use(express.json());

//Configuring path to the global variable folder
dotenv.config({ path: path.resolve(__dirname, './config/config.env') });

//Handling CORS
app.use((req, res, next) => {
	//Allow Access from different origins
	res.header('Access-Control-Allow-Origin', '*');

	//Allow Access for Different Headers
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	);

	//Allow Access for the following request methods
	if (req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'PUT< POST, PATHC, GET, DELETE');
		return res.status(200).json({});
	}
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
