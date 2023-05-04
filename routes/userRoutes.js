const express = require('express');
const router = express.Router();
const {getProfile, getUsers, showCurrentUser} = require('./../controllers/userController')

router.get('/', getUsers);
router.get('/:id', getProfile);
// router.get('/showMe', showCurrentUser);

module.exports = router