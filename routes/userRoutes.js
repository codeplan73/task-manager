const express = require('express');
const router = express.Router();
const {getProfile, getUsers} = require('./../controllers/userController')

router.get('/users', getUsers);
router.get('/users/:id', getProfile);

module.exports = router