const base = require('./base.controller');
const Asueto = require('../models/asueto.model');
const Vacation = require('../models/vacation.model');
const User = require('../models/user.model');
const UserDetails = require('../models/views/useremployment.view.model');
const VacationDetails = require('../models/views/vacationdetails.view.model');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getVacations = base.getAll(Vacation);
exports.getVacation = base.getOne(VacationDetails, 'idVacaciones');
exports.createVacation = base.createOne(Vacation);
exports.updateVacation = base.updateOne(Vacation, 'idVacaciones');
exports.deleteVacation = base.deleteOne(Vacation, 'idVacaciones');

exports.getMyVacations = catchAsync(async (req, res, next) => {
    const vacations = await VacationDetails.getOne('email', req.user.email);

    res.status(200).json({
        message: 'User requests retrieved successfully',
        data: {
            document: vacations,
        },
    });
});

exports.approveVacations = catchAsync(async (req, res, next) => {
    // CHECK IF IT IS ALREADY APPROVED
    const currVac = (await Vacation.getOne('idVacaciones', req.params.id))[0];
    if (currVac.status == 1)
        next(new AppError('Esta vacacion ya ha sido actualizada.', 400));

    // SET VACATIONS STATUS
    const vacation = (
        await Vacation.updateOne('idVacaciones', req.params.id, {
            status: 1,
            verifiedleader: 1,
        })
    )[0];

    const vacationDays = Vacation.vacations;

    const user = (await User.getOne('email', vacation.email))[0];
    await User.updateOne('email', vacation.email, {
        vacations: user.vacations - vacationDays,
    });

    res.status(200).json({
        message: 'Vacations status updated successfully',
        vacation,
    });
});
exports.discardVacations = catchAsync(async (req, res, next) => {
    // SET VACATIONS STATUS
    const vacation = (
        await Vacation.updateOne('idVacaciones', req.params.id, {
            status: 0,
            verifiedleader: 1,
        })
    )[0];

    res.status(200).json({
        message: 'Vacations status updated successfully',
        vacation,
    });
});

exports.getPending = catchAsync(async (req, res, next) => {
    // GET DEPARTMENT AND POSITION
    const { position, departamento, email } = (
        await UserDetails.getOne('email', req.user.email)
    )[0];

    if (position === 'Analista' || position === 'Especialista')
        next(
            new AppError(
                'El puesto de este empleado no es el adecuado para aprobar solicitudes',
                400
            )
        );
    // GET PENDING REQUESTS
    let vacationrequests = VacationDetails.tableReference
        .where({
            departamento,
        })
        .whereNot({
            email,
        })
        .where({ verifiedleader: 0 });

    switch (position) {
        case 'Gerencia':
            vacationrequests.whereNot({ position: 'Gerencia' });
        case 'Direccion':
            vacationrequests.whereNot({ position: 'Direccion' });
        case 'Coordinacion':
            vacationrequests.whereNot({ position: 'Coordinacion' });
            break;
        default:
            break;
    }

    vacationrequests = await vacationrequests;

    // SEND PENDING REQUESTS
    res.status(200).json({
        message: 'Vacation requests retrieved successfully',
        results: vacationrequests.length,
        vacationrequests,
    });
});

exports.getAllVacationDetails = base.getAll(VacationDetails);

