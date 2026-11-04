const express = require('express');
const router = express.Router();
const userController = require('../controller/userContoller');

router.get('/', userController.ParentRoute);
router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser);
router.post('/users/addMany', userController.addMultipleUsers);

module.exports = router;