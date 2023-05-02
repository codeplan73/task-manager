const register = async (res, req) => {
    res.send('admin create user account');
}

const login = async (res, req) => {
    res.send('login user account')
}

const logout = async (res, req) => {
    res.send('logout user');
}

module.exports = {
    register, login, logout
}

