const express = require('express');
const router = express.Router();
// Include functions from controller
const {
    insertTask,
    updateTask,
    deleteTask,
    getTasks,
    getAssignedTasks
} = require('../controllers/TaskController');
// Add authorization middleware
const protect = require('../middleware/Auth');
// Register routes
router.post('/', protect, insertTask);
router.put('/:id', protect, updateTask);
router.delete('/:id', protect, deleteTask);
router.get('/user/all', protect, getTasks);
router.get('/user/assigned', protect, getAssignedTasks);
// Export the router
module.exports = router;