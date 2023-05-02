const createTask = async (res, req) => {
    res.send('admin create task');
}

const getAllTasks = async (res, req) => {
    res.send('get all tasks');
}

const getTask = async (res, req) => {
    res.send('show single task')
}

const assignTask = async (res, req) => {
    res.send('asign task to user')
}

module.exports = {
    createTask, getAllTasks, getTask, assignTask
}