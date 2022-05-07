const mongoose = require('mongoose');

const taskStateSchema = mongoose.Schema({
    name: {
        type: string
    }
})

module.exports = mongoose.model('TaskState', taskStateSchema);