const mongoose = require('mongoose');

const taskTypeSchema = mongoose.Schema({
    name: { 
        type: String
    }
})

module.exports = mongoose.model('TaskType', taskTypeSchema);