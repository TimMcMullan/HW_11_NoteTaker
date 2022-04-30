const express = require('express');
// Todo: Add the required routes for our api/html
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;
// Todo: Set up some body parsing, static, and route the middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
// Start the server on the port
app.listen(PORT, () => console.log(`This port is listening at ${PORT}`));
module.exports = app;