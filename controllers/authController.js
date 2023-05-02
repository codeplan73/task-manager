const register = async (req, res) => {
    res.send('admin create user account');
}

const login = async (req, res) => {
    res.send('login user account')
}

const logout = async (req, res) => {
    res.send('logout user');
}

module.exports = {
    register, login, logout
}

