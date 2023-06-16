const express = require('express');
const router = express.Router();
const {register, login, logout} = require('./../controllers/authController')
const { authenticateUser, authorizePermissions } = require('../middleware/authentication');

// router.post('/', [authenticateUser, authorizePermissions('admin')], register);
router.post('/login', login);
router.get('/logout', logout);

module.exports = router;
