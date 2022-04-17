const mongoose = require('mongoose');

// User organisations
const userOrganisationsSchema = mongoose.Schema({
    org_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Organization ID is required'],
        ref: 'Organization'
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'User ID is required'],
        ref: 'User' 
    }
})

module.exports = mongoose.model('UserOrganizations', userOrganisationsSchema);