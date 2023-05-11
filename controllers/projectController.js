const createProject = async (req, res) => {
    res.send('admin create task');
}

const getAllProject = async (req, res) => {
    res.send('get all tasks');
}

const getProject = async (req, res) => {
    res.send('show single task')
}

const updatedProject = async (req, res) => {
    res.send('asign task to user')
}

module.exports = {
    createProject, getAllProject, getProject, updatedProject
}