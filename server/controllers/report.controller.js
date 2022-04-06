const base = require('./base.controller');
const Report = require('../models/report.model');
const Row = require('../models/row.model');

exports.getReports = base.getAll(Report);
exports.getReport = base.getOne(Report, 'idReporte');
exports.createReport = base.createOne(Report);
exports.updateReport = base.updateOne(Report, 'idReporte');
exports.deleteReport = base.deleteOne(Report, 'idReporte');
exports.getRowsFromReport = base.getAll(Row);

exports.getRowsMiddleware = (req, rex, next) => {
    req.query.idReporte = req.params.id;
    req.query.limit = 12;
    req.query.sort = '-date';
    next();
};
