const base = require('./base.controller');
const Pertenece = require('../models/pertenece.model');

exports.getPertenece = base.getOne(Pertenece, 'idPertenece');
exports.createPertenece = base.createOne(Pertenece);
exports.updatePertenece = base.updateOne(Pertenece, 'idPertenece');
exports.deletePertenece = base.deleteOne(Pertenece, 'idPertenece');