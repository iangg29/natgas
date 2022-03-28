const express = require('express');
const vacationController = require('../controllers/vacation.controller');

const router = express.Router();

router
    .route('/')
    .get(vacationController.getVacations)
    .post(vacationController.createVacation);
router
    .route('/:id')
    .get(vacationController.getVacation)
    .patch(vacationController.updateVacation)
    .delete(vacationController.deleteVacation);

router.route('/myvacationrequests/:id').get(vacationController.getMyVacations);
router
    .route('/approvevacationrequest/:id')
    .patch(vacationController.approveVacations);
router
    .route('/discardvacationrequest/:id')
    .patch(vacationController.discardVacations);
router
    .route('/mypendingvacationrequests/:id')
    .get(vacationController.getPending);

module.exports = router;
