const mongoose = require('mongoose');

// User schema
const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required.']
    },
    password: {
        type: String,
        required: [true, 'Password is required.']
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
},
{
    timestamps: true
});

// Export model(s)
module.exports = mongoose.model('User', userSchema);