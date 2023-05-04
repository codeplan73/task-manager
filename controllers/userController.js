const User = require('../models/User');
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const { attachCookiesToResponse, createTokenUser, checkPermissions } = require('../utils')


const getUsers = async (req, res) => {
    const users = await User.find({}).select('-password');
    res.status(StatusCodes.OK).json({users, count: users.length });
}

const getProfile = async (req, res) => {
    const id = req.params.id;
    const user = await User.findOne({ _id: id }).select("-password");
    console.log(id)
  if (!user) {
    throw new CustomError.NotFoundError(`No user with ud: ${id}`);
  }
//   checkPermissions(req.user, user._id);
  res.status(200).json({ user }); 
};

const showCurrentUser = async (req, res) => {
  res.status(StatusCodes.OK).json({user: req.user})
}

module.exports = {
    getUsers, getProfile, showCurrentUser
}