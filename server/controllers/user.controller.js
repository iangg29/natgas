const base = require('./base.controller');
const User = require('../models/user.model');
const UserEmployment = require('../models/views/useremployment.view.model');
const catchAsync = require('../utils/catchAsync');

exports.getUsers = base.getAll(User);
exports.getUserByEmail = base.getOne(User, 'email');
exports.getUserByEmployeeNumber = base.getOne(User, 'number');
exports.getUserEmployment = base.getOne(UserEmployment, 'email');
exports.createUser = base.createOne(User);
exports.updateUser = base.updateOne(User, 'number');
exports.deleteUser = base.deleteOne(User, 'number');

exports.getUsersEmployment = catchAsync(async (req, res, next) => {
    const userEmploymentData = (await UserEmployment.getAll());
    res.status(200).json({
        success: true,
        results: userEmploymentData.size,
        data: userEmploymentData,
    });
});