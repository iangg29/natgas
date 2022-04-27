const express = require ('express');
const asuetoController = require ('../controllers/asueto.controller');
const abacController = require('../controllers/abac.controller');
const router = express.Router();

router
    .route('/')
    .get(abacController.limitRole('HR'), asuetoController.getAsuetos)
    .post(abacController.limitRole('HR'), asuetoController.createAsueto)
    .delete(abacController.limitRole('HR'), asuetoController.deleteAsuetos);

router
    .route('/:id')
    .delete(abacController.limitRole('HR'), asuetoController.deleteAsueto);

module.exports = router;