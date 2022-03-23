const base = require('./base.controller');
const User = require('../models/user.model');

exports.getUsers = base.getAll(User);
exports.getUserByEmail = base.getOne(User, 'email');
exports.getUserByEmployeeNumber = base.getOne(User, 'number');
exports.createUser = base.createOne(User);
exports.updateUser = base.updateOne(User, 'number');
exports.deleteUser = base.deleteOne(User, 'number');
