const User = require('../models/User');
const {StatusCodes} = require('http-status-codes');
const CustomError = require('../errors')
const { attachCookiesToResponse, createTokenUser} = require('../utils')

const register = async (req, res) => {
    const {email, name, password} = req.body;

    const emailAlreadyExists = await User.findOne({email});
    if(emailAlreadyExists){
        throw new CustomError.BadRequestError('Email already exist')
    }

    // assign admin role to first account
    const isFirstAccount = (await User.countDocuments({})) === 0;
    const role = isFirstAccount ? "admin" : 'user';

    const user = await User.create({ email, name, password});
    const tokenUser = {name: user.name, userId: user._id, role: user.role};

    attachCookiesToResponse({res, user: tokenUser});
    res.status(StatusCodes.OK).json(tokenUser);

}

const login = async (req, res) => {
    res.send('login user account')
}

const logout = async (req, res) => {
    res.cookie('token', 'logout', {
        httpOnly: true,
        expires: new Date(Date.now() + 5 * 1000)
    });
    res.status(StatusCodes.OK).json({ msg: 'user logged out'});
}

module.exports = {
    register, login, logout
}

