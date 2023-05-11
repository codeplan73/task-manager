const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
const Project = require('./../models/Project');

const createProject = async (req, res) => {
   const { name, category, description, privacy } = req.body;
   if(!name || !category || !description || !privacy){
     throw new CustomError.BadRequestError('All fields required')
   }

   const project = await Project.create({name, category, description, privacy});
   res.status(StatusCodes.OK).json({project})
}

const getAllProject = async (req, res) => {
    const projects = await Project.find({});
    
}

const getProject = async (req, res) => {
    res.send('show single project')
}

const updatedProject = async (req, res) => {
    res.send('admin update project')
}

module.exports = {
    createProject, getAllProject, getProject, updatedProject
}