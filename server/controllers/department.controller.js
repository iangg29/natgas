const base = require('./base.controller');
const Department = require('../models/department.model');

exports.getDepartments = base.getAll(Department);
exports.getDepartment = base.getOne(Department, 'idDepartamento');
exports.createDepartment = base.createOne(Department);
exports.updateDepartment = base.updateOne(Department, 'idDepartamento');
exports.deleteDepartment = base.deleteOne(Department, 'idDepartamento');
