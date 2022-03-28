const express = require('express');
const natgasblockController = require('../controllers/natgasblock.controller');

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

router.route('/approve/:id').patch(natgasblockController.approveNatgasblock);

router.route('/myngbrequests/:id').get(natgasblockController.getMyNatgasblocks);

module.exports = router;
