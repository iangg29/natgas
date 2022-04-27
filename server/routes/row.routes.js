const express = require('express');
const rowController = require('../controllers/row.controller');
const abacController = require("../controllers/abac.controller");

const router = express.Router();

router.route('/').get(rowController.getRows).post(rowController.createRow)
router.route('/:id')
    .get(rowController.getRow)
    .patch(abacController.limitRole('HR'),rowController.updateRow)
    .delete(abacController.limitRole('HR'),rowController.deleteRow);

module.exports = router;