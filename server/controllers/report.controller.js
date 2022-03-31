const base = require('./base.controller');
const Report = require('../models/report.model');

exports.getReports = base.getAll(Report);
exports.getReport = base.getOne(Report, 'idReporte');
exports.createReport = base.createOne(Report);
exports.updateReport = base.updateOne(Report, 'idReporte');
exports.deleteReport = base.deleteOne(Report, 'idReporte');