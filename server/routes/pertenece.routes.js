const express = require('express');
const perteneceController = require('../controllers/pertenece.controller');

const router = express.Router();

router.route('/').post(perteneceController.createPertenece)
router.route('/email/:id')
    .get(perteneceController.getPertenece)
    .post(perteneceController.createPertenece)
    .patch(perteneceController.updatePertenece)
    .delete(perteneceController.deletePertenece);

module.exports = router;