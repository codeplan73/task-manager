const mongoose = require('mongoose')

const TaskSchema = mongoose.Schema(
  {
    assignedBy: {
      type: String,
      required: true,
    },
    dueDate: {
      type: Date,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    project: {
      type: mongoose.Schema.ObjectId,
      ref: 'Project',
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: 'pending',
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Task', TaskSchema)
