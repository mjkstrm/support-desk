const express = require('express');
const router = express.Router();
// Include functions from controller
const { registerUser, loginUser, getUserData } = require('../controllers/UserController')
// Add authentication middleware
const protect = require('../middleware/Auth');
// Register route
router.post('/', registerUser);
// Login route
router.post('/login', loginUser);
// User info route
router.get('/userData', protect, getUserData);

// Export the router.
module.exports = router;