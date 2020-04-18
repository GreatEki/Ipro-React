const http = require('http');
const app = require('./app');
const dotenv = require('dotenv');
const path = require('path');

//Create Server
const server = http.createServer(app);

//Configuring path to the global variable folder
dotenv.config({ path: path.resolve(__dirname, './config/config.env') });

const PORT = process.env.PORT || 5000;
server.listen(PORT, () =>
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
