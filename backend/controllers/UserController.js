// Handles exceptions in async functions automatically. Passes the errors to our custom error handler
const asyncHandler = require('express-async-handler');
// Library used for encrypting passwords.
const bcrypt = require('bcryptjs');
// Json web token
const jsonWebToken = require('jsonwebtoken');
// Data model
const User = require('../models/UserModel');
// @desc Register a new user
// @route /api/users
// @access public
const registerUser = asyncHandler(async (req, res) => {
    // Destruct fields from request
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400);
        throw new Error('Include all fields');
    }
    // Check whether user already exists.
    const userExists = await User.findOne({email});
    if (userExists) {
        res.status(400);
        throw new Error('User already exists.');
    }
    // Hash the password, functions returns promises so await is required.
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // Create user
    const user = await User.create({ name, email, password: hashedPassword });
    if (user) {
        res.status(201).json({ 
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        });
    }
    else {
        res.status(400);
        throw new Error('Invalid user data.');
    }
});

// @desc Login user
// @route /api/users/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
    // Destruct fields from request
    const { email, password } = req.body;
    const user = await User.findOne({email});
    // Check whether user exists, and match passwords.
    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }
    else {
        res.status(401);
        throw new Error('Invalid credentials');
    }
});

// @desc Get current user data
// @route /api/user/userData
// @access private
const getUserData = asyncHandler(async (req, res) => {
    const user = { 
        id: req.user.id, 
        name: req.user.name,
        email: req.user.email,
    };
    res.status(200).json(user);
})

// Generate web token
const generateToken = (id) => {
    return jsonWebToken.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });
}

module.exports = { registerUser, loginUser, getUserData }