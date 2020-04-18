const express = require('express');
const dbConnection = require('./config/database');

//Initialise Express
const app = express();

//Express Middleware and Body-Parser
app.use(express.json());

//Database Connection
dbConnection();

app.use((req, res, next) => {
	res.status(200).json({
		message: 'App connected to the server',
	});
});

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
		res.header('Access-Control-Allow-Methods', 'PUT POST, PATHC, GET, DELETE');
		return res.status(200).json({});
	}
});

module.exports = app;
