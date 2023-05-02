const getUsers = async (req, res) => {
    res.send('get all users account');
}

const getProfile = async (req, res) => {
    res.send('show logged in user profile')
}

module.exports = {
    getUsers, getProfile
}