const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    privacy: {
        type: String,
        required: true
    },
    status: {
        type:String,
        required: true,
        default: 'pending'
    },
    projectImage: {
        type: String,
        required: true
    } 
})

module.exports = mongoose.model('Project', ProjectSchema);