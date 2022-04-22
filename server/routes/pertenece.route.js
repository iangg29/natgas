const express = require('express');
const perteneceController = require('../controllers/pertenece.controller');

const router = express.Router();

router.route('/').get(perteneceController.getPertenece).post(perteneceController.createPertenece)
router.route('/:id')
    .get(perteneceController.getPertenece)
    .patch(perteneceController.updatePertenece)
    .delete(perteneceController.deletePertenece);

module.exports = router;