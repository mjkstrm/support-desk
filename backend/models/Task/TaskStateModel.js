const mongoose = require('mongoose');

const taskStateSchema = mongoose.Schema({
    name: {
        type: String
    }
})

module.exports = mongoose.model('TaskState', taskStateSchema);