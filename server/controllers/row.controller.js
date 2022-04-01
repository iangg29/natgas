const base = require('./base.controller');
const Row = require('../models/row.model');

exports.getRows = base.getAll(Row);
exports.getRow = base.getOne(Row, 'idRegistro');
exports.createRow = base.createOne(Row);
exports.updateRow = base.updateOne(Row, 'idRegistro');
exports.deleteRow = base.deleteOne(Row, 'idRegistro');