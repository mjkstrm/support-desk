// Entry point to back end, create express application
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { handleError } = require('./middleware/ErrorHandler');
const connectDB = require('./config/db');
const app = express();
// Port
const PORT = process.env.PORT || 8000;
// Connect to database
connectDB();
// Middleware
// Allows us to parse json payloads from requests
app.use(express.json());
// Allows us to parse url encoded payloads from requests
app.use(express.urlencoded({ extended: false }))


// Create a route
app.get('/', (request, response) => {
    response.send('hello');
})
// Routes
// Set specified functions from UserRoutes to path /api/users
// /api/users is connected to UserRoutes file.
app.use('/api/users', require('./routes/UserRoutes'));
// Add error handler to application
app.use(handleError);
// Bind express to given port.
app.listen(PORT, () => console.log(`Server started. Port: ${PORT}`));