const http = require('http');
const express = require('express');
const app = require('./app');
const dotenv = require('dotenv');
const path = require('path');
const dbConnection = require('./config/database');

//Create Server
const server = http.createServer(app);

//Configuring path to the global variable folder
dotenv.config({ path: path.resolve(__dirname, './config/config.env') });

// COnnect to Database
dbConnection();

//Importing routes
app.use('/api/users/auth', require('./api/routes/userRoutes'));
app.use('/api/orders', require('./api/routes/orderRoutes'));

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'client/build')));
}

server.listen(PORT, () =>
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
