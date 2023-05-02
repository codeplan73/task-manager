const createTask = async (req, res) => {
    res.send('admin create task');
}

const getAllTasks = async (req, res) => {
    res.send('get all tasks');
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