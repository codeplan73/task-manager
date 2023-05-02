const getUsers = async (res, req) => {
    res.send('get all users account');
}

const getProfile = async (res, req) => {
    res.send('show logged in user profile')
}

module.exports = {
    getUsers, getProfile
}