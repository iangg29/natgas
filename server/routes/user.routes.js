const express = require('express');
const userController = require('../controllers/user.controller');
const makeFieldsPrivate = require('../utils/privateFields');
const User = require('../models/user.model');
const router = express.Router();

router.use(makeFieldsPrivate(User, 'password', 'created_at', 'updated_at'));

router.route('/email/:id').get(userController.getUserByEmail);
router.route('/employment').get(userController.getAllUserEmploymentDetails);
router
    .route('/employment/:id')
    .get(userController.getOneUsersEmploymentDetails);
router.route('/').get(userController.getUsers).post(userController.createUser);
router
    .route('/:id')
    .get(userController.getUserByEmployeeNumber)
    .patch(userController.updateUser)
    .delete(userController.deleteUser);

module.exports = router;
