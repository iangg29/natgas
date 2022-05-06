const express = require('express');
const rangoVacacionesController = require('../controllers/rangovacaciones.controller');
const abacController = require("../controllers/abac.controller");

const router = express.Router();

router.route('/').get(abacController.limitRole('HR'),rangoVacacionesController.getRangos).post(abacController.limitRole('HR'),rangoVacacionesController.createRango);
router.route('/delete/all').delete(abacController.limitRole('HR'),rangoVacacionesController.deleteAll);
router.route('/:id')
    .get(abacController.limitRole('HR'),rangoVacacionesController.getRangoById)
    .patch(abacController.limitRole('HR'),rangoVacacionesController.updateRango)
    .delete(abacController.limitRole('HR'),rangoVacacionesController.deleteOne);

module.exports = router;