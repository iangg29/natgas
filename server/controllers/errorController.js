const AppError = require('../utils/appError');

const sendErrorDev = (err, req, res) => {
    res.status(err.statusCode).json({
        status: err.status,
        error: err,
        message: err.message,
        stack: err.stack,
    });

    console.log(err);
};
const sendErrorProduction = (err, req, res) => {
    // Operational
    if (err.isOperational) {
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
        });
        // Programming error
    } else {
        // 1 log error
        console.error('Error', err);

        // 2 send generic response
        res.status(500).json({
            status: 'error',
            error: 'Something went very wrong',
        });
    }
};

// este es para tokens modificadas
const handleJWTError = (err) =>
    new AppError('Invalid token. Please login again.', 401);

const handleJWTExpiredError = (err) =>
    new AppError('Your session has expired. Please login again.', 401);

/**
 * catch all errors and send a personalized reponse depending on the error name
 * @param {Obj} error - The error caught by the middleware.
 * @param {Obj} req - The req object.
 * @param {Obj} res - The res object.
 * @param {function} next - The next function.
 */
module.exports = (err, req, res, next) => {
    console.log(err);
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    if (process.env.NODE_ENV === 'development') {
        sendErrorDev(err, req, res);
    } else if (process.env.NODE_ENV === 'production') {
        // con esto identificaremos los errores de validación
        let error = Object.create(err);
        if (err.name === 'JsonWebTokenError') error = handleJWTError(err);
        if (err.name === 'TokenExpiredError')
            error = handleJWTExpiredError(err);
        sendErrorProduction(error, req, res);
    }
};
