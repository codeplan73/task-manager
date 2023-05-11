const express = require('express');
const router = express.Router();
const {
    createTask,
    getAllTasks,
    assignTask,
    getTask,
    updateTask
} = require('./../controllers/taskController');
const { authenticateUser, authorizePermissions } = require('../middleware/authentication');

router
    .route('/')
    .post([authenticateUser, authorizePermissions('admin')], createTask)
    .get(authenticateUser, getAllTasks)

router
    .route('/:id')
    .get(authenticateUser, getTask)
    .patch(authenticateUser, updateTask)

module.exports = router
