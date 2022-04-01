const base = require('./base.controller');
const User = require('../models/user.model');
const UserEmployment = require('../models/views/useremployment.view.model');

exports.getUsers = base.getAll(User);
exports.getUserByEmail = base.getOne(User, 'email');
exports.getUserByEmployeeNumber = base.getOne(User, 'number');
exports.getUserEmployment = base.getOne(UserEmployment, 'number');
exports.createUser = base.createOne(User);
exports.updateUser = base.updateOne(User, 'number');
exports.deleteUser = base.deleteOne(User, 'number');
