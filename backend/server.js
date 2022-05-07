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

// Map endpoints
// /api/users is connected to UserRoutes
app.use('/api/users', require('./routes/UserRoutes'));
// /api/org is connected to OrganizationRoutes
app.use('/api/org', require('./routes/OrganizationRoutes'));
// /api/ticket is connected to TaskRoutes
app.use('api/task', require('./routes/TaskRoutes'));

// Middleware functions
// Add error handler to application
app.use(handleError);


// Bind express to given port.
app.listen(PORT, () => console.log(`Server started. Port: ${PORT}`));