const express = require('express');
const natgasblockController = require('../controllers/natgasblock.controller');
const abacController = require('../controllers/abac.controller');

const router = express.Router();

router.route('/myngbrequests/').get(natgasblockController.getMyNatgasblocks);
router
    .route('/mypendingngbrequests/')
    .get(abacController.limitRole('Leader'), natgasblockController.getPending);

router
    .route('/')
    .get(natgasblockController.getNatgasblocks)
    .post(natgasblockController.createNatgasblock);
router
    .route('/:id')
    .get(natgasblockController.getNatgasblock)
    .patch(abacController.limitRole('Leader'),natgasblockController.updateNatgasblock)
    .delete(abacController.limitRole('Leader'),natgasblockController.deleteNatgasBlock);

router
    .route('/approve/:id')
    .patch(
        abacController.limitRole('Leader'),
        natgasblockController.approveNatgasblock
    );

module.exports = router;
