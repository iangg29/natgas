const base = require('./base.controller');
const Asueto = require('../models/asueto.model');

exports.getAsuetos = base.getAll(Asueto);
exports.createAsueto = base.createOne(Asueto);
exports.deleteAsueto= base.deleteOne(Asueto, 'idAsueto');
exports.deleteAsuetos=base.deleteAll(Asueto);
