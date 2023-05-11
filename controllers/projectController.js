const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')
const Project = require('./../models/Project')
const Task  = require('./../models/Task')

const createProject = async (req, res) => {
  const { name, category, description, privacy } = req.body
  if (!name || !category || !description || !privacy) {
    throw new CustomError.BadRequestError('All fields required')
  }

  const project = await Project.create({ name, category, description, privacy })
  res.status(StatusCodes.OK).json({ project })
}

const getAllProject = async (req, res) => {
  const projects = await Project.find({})
  res.status(StatusCodes.OK).json({ projects, count: projects.length })
}

const getProject = async (req, res) => {
  const {projectId} = req.params;
//   const project = Project.findOne({_id: ProjectId}).populate('tasks');
  const project = await Project.findOne({ _id: projectId })
  const tasks = await Task.findById({project: projectId});

  if (!project) {
    throw new CustomError.NotFoundError(`No project with id: ${projectId}`)
  }

  res.status(StatusCodes.OK).json({ project, tasks })
}

const updatedProject = async (req, res) => {
  res.send('admin update project')
}

module.exports = {
  createProject,
  getAllProject,
  getProject,
  updatedProject,
}
