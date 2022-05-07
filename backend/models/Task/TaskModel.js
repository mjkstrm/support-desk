const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    description: {
        type: String
    },
    estimatedAmount: {
        type: mongoose.Schema.Types.Number
    },
    stateId: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'State is required'],
        ref: 'TaskState'
    },
    typeId: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Type is required'],
        ref: 'TaskType'
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true],
        ref: 'User'
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    org_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Organization is required'],
        ref: 'Organization'
    }

})

module.exports = mongoose.model('Task', taskSchema);