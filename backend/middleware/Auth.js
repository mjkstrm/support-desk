const jsonWebToken = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/UserModel');

const protect = asyncHandler(async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get token from request header.
            token = req.headers.authorization.split(' ')[1]; // Token comes as. Bearer [token], split at first blank
            const decoded = jsonWebToken.verify(token, process.env.JWT_SECRET);
            // Get user from token, exclude password from the query
            req.user = await User.findById(decoded.id).select('-password');
            // Call next piece of middleware
            next();
        } catch (error) {
            console.log(error);
            res.status(401);
            throw new Error('Not authorized.');
        }
    }
    if (!token) {
        res.status(401);
        throw new Error('Not authorized.');
    }
})

module.exports = protect;