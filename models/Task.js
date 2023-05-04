const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    assignedBy: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    project: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Task', TaskSchema);