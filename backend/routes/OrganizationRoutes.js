const express = require('express');
const router = express.Router();
// Include functions from controller
const { 
    insertOrganization, 
    updateOrganization, 
    deleteOrganization, 
    getOrganization, 
    getUserOrganizations 
} = require('../controllers/OrganizationController');
// Add authorization middleware
const protect = require('../middleware/Auth');
// Register routes
// Insert
router.post('/', protect, insertOrganization);
// Update
router.put('/:id', protect, updateOrganization);
// Delete
router.delete('/:id', protect, deleteOrganization);
// Get single org
router.get('/:id', protect, getOrganization);
// Get users organizations
router.get('/:id/all', protect, getUserOrganizations);
// Export the router
module.exports = router;
