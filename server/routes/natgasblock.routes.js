const express = require('express');
const natgasblockController = require('../controllers/natgasblock.controller');
const abacController = require('../controllers/abac.controller');

const router = express.Router();

router
    .route('/')
    .get(natgasblockController.getNatgasblocks)
    .post(natgasblockController.createNatgasblock);
router
    .route('/:id')
    .get(natgasblockController.getNatgasblock)
    .patch(natgasblockController.updateNatgasblock)
    .delete(natgasblockController.deleteNatgasBlock);

router
    .route('/approve/:id')
    .patch(abacController.limitRole('Leader'), natgasblockController.approveNatgasblock);

router.route('/myngbrequests/:id').get(natgasblockController.getMyNatgasblocks);
router.route('/mypendingngbrequests/').get(abacController.limitRole('Leader'), natgasblockController.getPending);

module.exports = router;
