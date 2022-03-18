const base = require('./base.controller');
const User = require('../models/user.model');

exports.getUsers = base.getAll(User);
exports.getUserByEmail = base.getOne(User, 'email');
exports.getUserByEmployeeNumber = base.getOne(User, 'No.Empleado');
exports.createUser = base.createOne(User);
exports.updateUser = base.updateOne(User, 'No.Empleado');
exports.deleteUser = base.deleteOne(User, 'No.Empleado');
