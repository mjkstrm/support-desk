// Handles exceptions in async functions automatically. Passes the errors to our custom error handler
const asyncHandler = require('express-async-handler');
// Data models
const Organization = require('../models/Organization/OrganizationModel');
const User = require('../models/User/UserModel');

// @desc Create a new organization
// @route /api/org
// @access Private
const insertOrganization = asyncHandler( async (req, res) => {
    // Get user from json web token
    const user = await User.findById(req.user.id);
    if (!user) {
        res.status(401);
        throw new Error('User not found.');
    }
    // Insert
    const { name, description  } = req.body;
    if (!name) {
        res.status(400);
        throw new Error('Name is required.')
    }
    // Create a new organization
    const org = await Organization.create({ name, description, owner: req.user.id });
    // Return object in response
    res.status(201).json(org);
});

// @desc Delete existing organization
// @route /api/org
// @access Private
const deleteOrganization = asyncHandler( async (req, res) => {
    // Get user from json web token
    const user = await User.findById(req.user.id);
    if (!user) {
        res.status(401);
        throw new Error('User not found.');
    }
    const org_id = req.params.id;
    // Get org by id.
    const org = await Organization.findById(org_id);
    // If orgs owner is not the user, forbid removal.
    if (org.owner != user.id) {
        res.status(401);
        throw new Error('Only the owner can remove organizations.');
    }
    // Remove organization
    Organization.remove(org);
    res.status(200).json({message: 'Organization removed.'});
});

// @desc Update organization
// @route /api/org
// @access Private
const updateOrganization = asyncHandler( async (req, res) => {
    // Get user from json web token
    const user = await User.findById(req.user.id);
    if (!user) {
        res.status(401);
        throw new Error('User not found.');
    }
    const org_id = req.params.id;
    // Get org by id
    const org = await Organization.findById(req.params.id);
    // If orgs owner is not the user, forbid action.
    if (org.owner != user.id) {
        res.status(401);
        throw new Error('Only the owner can modify the organization');
    }
    // Update organization, option object with value new: true is required to return the updated values.
    const updatedOrg = await Organization.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedOrg);
});

const getOrganization = asyncHandler( async (req, res) => {
    res.send('Get org');
    // req.params.id
});

const getUserOrganizations = asyncHandler( async (req, res) => {
    res.send('Get user orgs')
});

module.exports = { 
    insertOrganization, 
    updateOrganization, 
    deleteOrganization, 
    getOrganization, 
    getUserOrganizations 
};