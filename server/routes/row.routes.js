const express = require('express');
const rowController = require('../controllers/row.controller');

const router = express.Router();

router.route('/').get(rowController.getRows).post(rowController.createRow)
router.route('/:id')
    .get(rowController.getRow)
    .patch(rowController.updateRow)
    .delete(rowController.deleteRow);

module.exports = router;