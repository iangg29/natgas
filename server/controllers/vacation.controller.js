const base = require('./base.controller');
const Vacation = require('../models/vacation.model');

exports.getVacations = base.getAll(Vacation);
exports.getVacation = base.getOne(Vacation, 'idVacaciones');
exports.getMyVacations = base.getOne(Vacation, 'email');
exports.createVacation = base.createOne(Vacation);
exports.updateVacation = base.updateOne(Vacation, 'idVacaciones');
exports.deleteVacation = base.deleteOne(Vacation, 'idVacaciones');
