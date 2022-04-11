const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const db = require('../db/database');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const User = require('./../models/user.model');

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

    newUser.save();

    return createSendToken(newUser, 201, req, res);
});

exports.login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;
    // con estos vamos a checar
    // 1 checar si email y password existen
    if (!email || !password) {
        // despues de llamar el next queremos que esta funcion termine
        return next(new AppError('Please provide email and password', 400));
    }

    // 2 checar si existe un usuario y si son correctas
    const user = await User.findOne({ email }).select('+password'); //con el plus antes dle nombre agarramos los que tienen select false
    // ya con esto lo tenemos hasheado pero debemos compararla con la original, esto va en el model porque s erefiere al negocio
    // const correct = await user.correctPassword(password, user.password); //esta es una funcion de instancia, por eso esta en el resultado

    if (!user || !(await user.correctPassword(password, user.password))) {
        return next(new AppError('Incorrect email or password', 401));
    } // si hasta aqui no ha mandado alv ps ya llegamos a lo bueno

    // 3 enviar la JWT de regreso al cliente
    createSendToken(user, 201, req, res);
});
