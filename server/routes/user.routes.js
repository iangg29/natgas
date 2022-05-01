const express = require('express');
const userController = require('../controllers/user.controller');
const { makeFieldsPrivate, restricBody } = require('../utils/protection');
const User = require('../models/user.model');
const abacController = require('../controllers/abac.controller');
const router = express.Router();

router.route('/employment').get(userController.getAllUserEmploymentDetails);
router.route('/me').get(userController.getMe).patch(userController.updateMe);
router
    .route('/employment/:id')
    .get(userController.getOneUsersEmploymentDetails);
router.use(
    abacController.limitRole('HR'),
    makeFieldsPrivate(User, 'password', 'created_at', 'updated_at')
);
router.route('/').get(userController.getUsers).post(userController.createUser);
router
    .route('/:id')
    .get(userController.getUserByEmployeeNumber)
    .patch(userController.updateUser)
    .delete(userController.deleteUser);
router.route('/email/:id').get(userController.getUserByEmail);

module.exports = router;
