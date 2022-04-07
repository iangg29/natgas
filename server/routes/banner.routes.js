const express = require('express');
const multer = require('multer');
const bannerController = require('../controllers/banner.controller');
const filesController = require('../controllers/files.controller');

const router = express.Router();

router
    .route('/')
    .get(bannerController.getBanners)
    .post(
        filesController.uploadBannerPhoto,
        filesController.formatNewsImage,
        bannerController.createBanner
    );
router
    .route('/:id')
    .get(bannerController.getBannerById)
    .patch(
        filesController.uploadBannerPhoto,
        filesController.formatNewsImage,
        bannerController.updateBanner
    )
    .delete(bannerController.deleteBanner);


module.exports = router;
