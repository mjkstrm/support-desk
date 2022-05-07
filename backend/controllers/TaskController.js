// Handles exceptions in async functions automatically. Passes the errors to our custom error handler
const asyncHandler = require('express-async-handler');
// Required data models
const Organization = require('../models/Organization/OrganizationModel');
const User = require('../models/User/UserModel');
const TaskType = require('../models/Task/TaskTypeModel');
const TaskState = require('../models/Task/TaskStateModel');
const Task = require('../models/Task/TaskModel');

// API Methods

// @desc Create a new task
// @route /api/ticket
// @access Private
const insertTask = asyncHandler( async (req, res) => {
    res.send('Insert task');
})

// @desc Update an existing task
// @route /api/ticket
// @access private
const updateTask = asyncHandler( async (req, res) => {
    res.send('Update task')
})

// @desc Delete an existing task
// @route /api/ticket
// @access private
const deleteTask = asyncHandler( async (req, res) => {
    res.send('Delete task')
})

// @desc Get all tasks for an organization
// @route /api/ticket/org/all
// @access private
const getTasks = asyncHandler( async (req, res) => {
    res.send('Get tasks')
})

// TODO: Get assigned tasks

module.exports = {
    insertTask,
    updateTask,
    deleteTask,
    getTasks
};