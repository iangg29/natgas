const express = require('express');
const vacationController = require('../controllers/vacation.controller');
const abacController = require('../controllers/abac.controller');

const router = express.Router();

router
    .route('/')
    .get(vacationController.getVacations)
    .post(vacationController.createVacation);
router.route('/details').get(vacationController.getAllVacationDetails);
router
    .route('/:id')
    .get(vacationController.getVacation)
    .patch(vacationController.updateVacation)
    .delete(vacationController.deleteVacation);

router.route('/myvacationrequests/:id').get(vacationController.getMyVacations);

router
    .route('/approvevacationrequest/:id')
    .patch(
        abacController.limitRole('Leader'),
        vacationController.approveVacations
    );
router
    .route('/discardvacationrequest/:id')
    .patch(
        abacController.limitRole('Leader'),
        vacationController.discardVacations
    );
router
    .route('/mypendingvacationrequests/')
    .get(abacController.limitRole('Leader'), vacationController.getPending);

module.exports = router;
