const express = require('express');
const multer = require('multer');
const bannerController = require('../controllers/banner.controller');
const filesController = require('../controllers/files.controller');
const abacController = require('../controllers/abac.controller');

const router = express.Router();

router
    .route('/')
    .get(bannerController.getBanners)
    .post(
        abacController.limitRole('HR'),
        filesController.uploadBannerPhoto,
        filesController.formatNewsImage,
        bannerController.createBanner
    );
router
    .route('/:id')
    .get(bannerController.getBannerById)
    .patch(
        abacController.limitRole('HR'),
        filesController.uploadBannerPhoto,
        filesController.formatNewsImage,
        bannerController.updateBanner
    )
    .delete( abacController.limitRole('HR'), bannerController.deleteBanner);


module.exports = router;
