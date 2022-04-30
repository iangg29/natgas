const { off } = require('../app');
const User = require('../models/user.model.js');
const UserDetails = require('../models/views/useremployment.view.model.js');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

/**
 * Calculate user roles.
 *  @param {string} email - The email of the user that will get its roles calculated.
 * @return {array} - An array of roles
 */
const calcRoles = async (email) => {
    const roles = ['Employee'];
    const userDetails = (await UserDetails.getOne('email', email))[0];

    if (userDetails.departamento === 'Talento y comunicacion') roles.push('HR');

    if (
        userDetails.position === 'Coordinacion' ||
        userDetails.position === 'Gerencia' ||
        userDetails.position === 'Direccion'
    )
        roles.push('Leader');

    console.log('ROLES IN CALCROLES: ', roles);
    return roles;
};

// MIDDLEWARE 1 -> CALCULAR ROL
// 1) checar si ya quedo el empleado registrado
// 2) buscarlo en la tabla de detalles de empleo
// 3) calcular sus permisos basandose en sus detalles
// 4) agregar arreglo de roles a req -> req.roles

/**
 * A middleware that creates an attribule roles in the req obj to be accessed later.
 */
exports.getRole = catchAsync(async (req, res, next) => {
    if (!req.user.verified) {
        req.roles = ["notVerified"]
    }
    else{
        req.roles = await calcRoles(req.user.email);
        next();
    }

});

/**
 * A middleware that limits the users that can aaccess a route.
 *  @param {array} roles - The roles required to access a route.
 * @return {function} - Middleware that will require certain roles to acces a resource
 */
exports.limitRole =
    (...roles) =>
    (req, res, next) => {
        roles.forEach((role) => {
            if (!req.roles.includes(role))
                return next(
                    new AppError(
                        'No tienes permisos para completar esta acción',
                        401
                    )
                );
        });
        next();
    };

exports.calcRoles = calcRoles;
