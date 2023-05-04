const express = require('express');
const router = express.Router();
const {
    createTask,
    getAllTasks,
    assignTask,
    getTask,
} = require('./../controllers/taskController');
const { authenticateUser, authorizePermissions } = require('../middleware/authentication');

router
    .route('/')
    .post([authenticateUser, authorizePermissions], createTask)
    .get(getAllTasks)

router
    .route('/:id')
    .get(getTask)
    .patch([authenticateUser, authorizePermissions], assignTask)

module.exports = router
