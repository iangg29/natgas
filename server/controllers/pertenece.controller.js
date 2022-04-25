const base = require('./base.controller');
const Pertenece = require('../models/pertenece.model');

exports.getPertenece = base.getOne(Pertenece, 'email');
exports.createPertenece = base.createOne(Pertenece);
exports.updatePertenece = base.updateOne(Pertenece, 'email');
exports.deletePertenece = base.deleteOne(Pertenece, 'email');