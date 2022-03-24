const base = require('./base.controller');
const Natgasblock = require('../models/natgasblock.model');

exports.getNatgasblocks = base.getAll(Natgasblock);
exports.getNatgasblock = base.getOne(Natgasblock, 'idNatgasblock');
exports.getMyNatgasblocks = base.getOne(Natgasblock, 'email');
exports.createNatgasblock = base.createOne(Natgasblock);
exports.updateNatgasblock = base.updateOne(Natgasblock, 'idNatgasblock');
exports.deleteNatgasBlock = base.deleteOne(Natgasblock, 'idNatgasblock');
