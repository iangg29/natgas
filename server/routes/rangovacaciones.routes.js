const express = require('express');
const rangoVacacionesController = require('../controllers/rangovacaciones.controller');

const router = express.Router();

router.route('/').get(rangoVacacionesController.getRangos).post(rangoVacacionesController.createRango);
router.route('/delete/all').delete(rangoVacacionesController.deleteAll);
router.route('/:id')
    .get(rangoVacacionesController.getRangoById)
    .patch(rangoVacacionesController.updateRango)
    .delete(rangoVacacionesController.deleteOne);

module.exports = router;