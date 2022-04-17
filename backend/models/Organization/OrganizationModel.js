const mongoose = require('mongoose');

const orgSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    description: {
        type: String
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})

module.exports = mongoose.model('Organization', orgSchema);