const base = require('./base.controller');
const RangoVacaciones = require('../models/rangovacaciones.model');


exports.getRangos = base.getAll(RangoVacaciones);
exports.getRangoById = base.getOne(RangoVacaciones, 'idRangoVacaciones');
exports.createRango = base.createOne(RangoVacaciones);
exports.updateRango = base.updateOne(RangoVacaciones, 'idRangoVacaciones');
exports.deleteOne = base.deleteOne(RangoVacaciones, 'idRangoVacaciones');
exports.deleteAll = base.deleteAll(RangoVacaciones);