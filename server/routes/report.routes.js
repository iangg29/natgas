const express = require('express');
const reportController = require('../controllers/report.controller');

const router = express.Router();

router
    .route('/')
    .get(reportController.getReports)
    .post(reportController.createReport);
router
    .route('/:id')
    .get(reportController.getReport)
    .patch(reportController.updateReport)
    .delete(reportController.deleteReport);
router.route('/getRowsFromReport/:id').get(reportController.getRowsFromReport);

module.exports = router;
