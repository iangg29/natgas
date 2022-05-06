const express = require('express');
const departmentController = require('../controllers/department.controller');

const router = express.Router();

router.route('/').get(departmentController.getDepartments).post(departmentController.createDepartment);
router.route('/:id')
    .get(departmentController.getDepartment)
    .patch(departmentController.updateDepartment)
    .delete(departmentController.deleteDepartment);

module.exports = router;