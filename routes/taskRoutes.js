const express = require('express')
const router = express.Router()
const {
    createTask,
    getAllTasks,
    assignTask,
    getTask,
} = require('./../controllers/taskController')

router
    .route('/')
    .post(createTask)
    .get(getAllTasks)

router
    .route('/:id')
    .get(getTask)
    .patch(assignTask)

module.exports = router
