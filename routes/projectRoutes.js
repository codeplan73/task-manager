const express = require('express');
const router = express.Router();
const {
    createProject, getAllProject, getProject, updatedProject
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

module.exports = router
