const express = require('express');
const router = express.Router();
const {
    createProject, getAllProject, getProject, updatedProject,deleteProject
} = require('./../controllers/projectController');
const { authenticateUser, authorizePermissions } = require('../middleware/authentication');

router
    .route('/')
    .post([authenticateUser, authorizePermissions('admin')], createProject)
    .get(authenticateUser, getAllProject)

router
    .route('/:id')
    .get(authenticateUser, getProject)
    .patch([authenticateUser, authorizePermissions('admin')], updatedProject)
    .delete([authenticateUser, authorizePermissions('admin')], deleteProject)

module.exports = router
