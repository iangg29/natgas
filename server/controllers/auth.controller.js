const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const User = require('./../models/user.model');
const abacController = require('./abac.controller');

const signToken = (email) => {
    return jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
};

const createSendToken = (user, statusCode, req, res) => {
    const token = signToken(user.email);
    let cookieOptions;
    if (process.env.NODE_ENV === 'development') {
        cookieOptions = {
            expires: new Date(
                Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 60 * 1000
            ),
            httpOnly: true,
        };
    } else {
        cookieOptions = {
            expires: new Date(
                Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 60 * 1000
            ),
            httpOnly: true,
            secure: req.secure || req.headders('x-forwarded-proto') === 'https',
        };
    }

    res.cookie('jwt', token, cookieOptions);

    // Remove password from output
    user.password = undefined;
    user.passwordConfirm = undefined;
    user.tableName = undefined;

    res.status(statusCode).json({
        status: 'success',
        token,
        data: {
            user,
        },
    });
};

exports.signUp = catchAsync(async (req, res, next) => {
    const newUser = new User({
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm,
    });

    await newUser.save();

    return createSendToken(newUser, 201, req, res);
});

exports.login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new AppError('Please provide email and password', 400));
    }

    // 2 checar si existe un usuario y si son correctas
    const user = (await User.getOne('email', email))[0];

    if (!user) return next(new AppError('Incorrect email', 401));

    const isCorrect = await User.correctPassword(password, user.password);
    if (!isCorrect) {
        return next(new AppError('Incorrect password', 401));
    } // si hasta aqui no ha mandado alv ps ya llegamos a lo bueno

    if (user.verified) user.roles = await abacController.calcRoles(user.email);
    console.log(user);

    // 3 enviar la JWT de regreso al cliente
    createSendToken(user, 201, req, res);
});

exports.logout = (req, res, next) => {
    res.cookie('jwt', 'loggedout', {
        expires: new Date(Date.now() + 10 * 1000),
    });
    res.status(200).json({ status: 'success' });
};

exports.protect = catchAsync(async (req, res, next) => {
    // 1) Getting the token and check if its there
    let token;
    if (
        // es un estandard que el token vaya con este header y con el Bearer antes
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies.jwt) {
        token = req.cookies.jwt;
    }

    if (!token) {
        return next(
            new AppError(
                'You are not logged in. Please log in to get access',
                401
            )
        );
    }
    // 2) Verification: Validate the token to view if the signature is valid
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // 3) Check if user still exists
    const user = (await User.getOne('email', decoded.email))[0];
    if (!user) {
        return next(new AppError('The user does not longer exists', 401));
    }

    // 5) Next is called and the req accesses the protected route
    req.user = user; //podria ser util
    next();
});
