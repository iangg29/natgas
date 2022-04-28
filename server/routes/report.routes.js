const express = require('express');
const reportController = require('../controllers/report.controller');
const abacController = require("../controllers/abac.controller");

const router = express.Router();

router
    .route('/')
    .get(reportController.getReports)
    .post(abacController.limitRole('HR'),reportController.createReport);
router
    .route('/:id')
    .get(reportController.getReport)
    .patch(abacController.limitRole('HR'),reportController.updateReport)
    .delete(abacController.limitRole('HR'),reportController.deleteReport);
router
    .route('/getRowsFromReport/:id')
    .get(
        reportController.getRowsMiddleware,
        reportController.getRowsFromReport
    );

module.exports = router;
