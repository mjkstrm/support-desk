const express = require('express');
const router = express.Router();
// Include functions from controller
const {
    insertTask,
    updateTask,
    deleteTask,
    getTasks
} = require('../controllers/TaskController');
// Add authorization middleware
const protect = require('../middleware/Auth');
// Register routes
router.post('/', protect, insertTask);
router.put('/:id', protect, updateTask);
router.delete('/:id', protect, deleteTask);
router.get('/org/all', protect, getTasks);
// Export the router
module.exports = router;