const express = require('express');
const router = express.Router();
const {getProfile, getUsers} = require('./../controllers/userController')

router.get('/', getUsers);
router.get('/:id', getProfile);

module.exports = router