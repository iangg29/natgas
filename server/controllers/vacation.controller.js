const base = require('./base.controller');
const Vacation = require('../models/vacation.model');
const catchAsync = require('../utils/catchAsync');

exports.getVacations = base.getAll(Vacation);
exports.getVacation = base.getOne(Vacation, 'idVacaciones');
exports.getMyVacations = base.getOne(Vacation, 'email');
exports.createVacation = base.createOne(Vacation);
exports.updateVacation = base.updateOne(Vacation, 'idVacaciones');
exports.deleteVacation = base.deleteOne(Vacation, 'idVacaciones');

exports.approveVacations = catchAsync(async (req, res, next) => {
    // SET VACATIONS STATUS
    const vacation = (
        await Vacation.updateOne('idVacaciones', req.params.id, {
            status: 1,
            verifiedleader: 1,
        })
    )[0];

    // UPDATE USER VACATIONS LEFT
    const start = new Date(vacation.startdate);
    const end = new Date(vacation.enddate);

    const vacationDays =
        (start.getTime() - end.getTime()) / (1000 * 3600 * 24) + 1;

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
