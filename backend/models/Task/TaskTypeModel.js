const mongoose = require('mongoose');

const taskTypeSchema = mongoose.Schema({
    name: { 
        type: string 
    }
})

module.exports = mongoose.model('TaskType', taskTypeSchema);