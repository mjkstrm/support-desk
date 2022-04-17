const mongoose = require('mongoose');

// Schema
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required.']
    },
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
// Export model
module.exports = mongoose.model('User', userSchema);