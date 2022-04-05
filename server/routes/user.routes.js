const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.route('/').get(userController.getUsers).post(userController.createUser);
router.route('/:id')
    .get(userController.getUserByEmployeeNumber)
    .patch(userController.updateUser)
    .delete(userController.deleteUser);
router.route('/email/:id').get(userController.getUserByEmail);
router.route('/employment').get(userController.getUsersEmployment);
router.route('/employment/:id').get(userController.getUserEmployment);

module.exports = router;
