const base = require('./base.controller');
const User = require('../models/user.model');
const UserEmployment = require('../models/views/useremployment.view.model');
const { getAll } = require('./base.controller');

exports.getUsers = base.getAll(User);
exports.getUserByEmail = base.getOne(User, 'email');
exports.getUserByEmployeeNumber = base.getOne(User, 'number');
exports.getUserEmployment = base.getOne(UserEmployment, 'email');
exports.getUsersEmployment = base.getAll(UserEmployment);
exports.createUser = base.createOne(User);
exports.updateUser = base.updateOne(User, 'number');
exports.deleteUser = base.deleteOne(User, 'number');
