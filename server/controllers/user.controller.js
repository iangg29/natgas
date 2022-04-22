const base = require('./base.controller');
const User = require('../models/user.model');
const UserEmployment = require('../models/views/useremployment.view.model');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getUsers = base.getAll(User);
exports.getUserByEmail = base.getOne(User, 'email');
exports.getUserByEmployeeNumber = base.getOne(User, 'number');
exports.createUser = base.createOne(User);
exports.updateUser = base.updateOne(User, 'number');
exports.deleteUser = base.deleteOne(User, 'number');

exports.getAllUserEmploymentDetails = base.getAll(UserEmployment);
exports.getOneUsersEmploymentDetails = base.getOne(UserEmployment, 'email');

exports.getMe = catchAsync(async (req, res, next) => {
    const myDetails = (await UserEmployment.getOne('email', req.user.email))[0];

    res.status(200).json({
        message: 'User details retrieved successfully',
        data: {
            user: myDetails,
        },
    });
});

exports.updateMe = catchAsync(async (req, res, next) => {
    const updated = await User.updateOne('email', req.user.email, req.body);

    updated.password = undefined;
    updated.created_at = undefined;
    updated.updated_at = undefined;

    res.status(200).json({
        message: 'User updated successfully',
        data: {
            user: updated,
        },
    });
});

exports.updateMyPassword = catchAsync(async () => {
    const { password, passwordConfirm } = req.body;

    if (!password || !passwordConfirm)
        return next(new AppError('No haz enviado tu contraseña', 400));
    if (password !== passwordConfirm)
        return next(
            new AppError(
                'Tus contraseñas no coinciden, intentalo de nuevo',
                400
            )
        );

    const updated = await User.updateOne('email', req.user.email, { password });

    updated.password = undefined;
    updated.created_at = undefined;
    updated.updated_at = undefined;

    res.status(200).json({
        message: 'User password updated successfully',
        data: {
            user: updated,
        },
    });
});

