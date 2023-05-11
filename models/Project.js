const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    privacy: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: 'pending',
    },
  },
//    { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
)

// ProjectSchema.virtual('tasks', {
//     ref:'Task',
//     localField: '_id',
//     foreignField: 'project',
//     justOne: false,
// })

// ProjectSchema.pre('remove', async function (next) {
//   await this.model('Task').deleteMany({ project: this._id })
// })

module.exports = mongoose.model('Project', ProjectSchema)
