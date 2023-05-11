const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')
const Task  = require('./../models/Task')

const createTask = async (req, res) => {
    const { assignedBy, dueDate, tag, description, project } = req.body
  if (!assignedBy || !dueDate || !tag || !description || !project) {
    throw new CustomError.BadRequestError('All fields required')
  }

  const task = await Task.create({ assignedBy, dueDate, tag, description, project })
  res.status(StatusCodes.OK).json({ task })
}

const getAllTasks = async (req, res) => {
    const tasks = await Task.find({})
  res.status(StatusCodes.OK).json({ tasks, count: tasks.length })
}

const getTask = async (req, res) => {
    res.send('show single task')
}

const assignTask = async (req, res) => {
    res.send('asign task to user')
}

module.exports = {
    createTask, getAllTasks, getTask, assignTask
}