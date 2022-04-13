const { off } = require('../app');
const User = require('../models/user.model.js');
const UserDetails = require('../models/views/useremployment.view.model.js');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

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
exports.getRole = catchAsync(async (req, res, next) => {
    if (!user.verified)
        return next(
            new AppError(
                'Tu perfil no ha sido completado. Vuelve más tarde',
                401
            )
        );
    req.roles = await calcRoles(req.user.email);
    next();
});

// MIDDLEWARE 2 -> LIMITAR ROL (recibe un arreglo de roles necesarios)
// 1) Checar si los roles requeridos vienen en req.roles
// 1.1) Si alguno no viene manda AppError
// 2) Mandar next al siguiente middleware
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
