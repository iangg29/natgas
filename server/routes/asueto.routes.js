const express = require ('express');
const asuetoController = require ('../controllers/asueto.controller');
const router = express.Router();

router
    .route('/')
    .get(asuetoController.getAsuetos)
    .post(asuetoController.createAsueto)
    .delete(asuetoController.deleteAsuetos);

router
    .route('/:id')
    .delete(asuetoController.deleteAsueto);

module.exports = router;