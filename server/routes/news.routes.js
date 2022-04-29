const express = require('express');
const newsController = require('../controllers/news.controller');
const filesController = require('../controllers/files.controller');
const abacController = require('../controllers/abac.controller');
const router = express.Router();

router
    .route('/')
    .get(newsController.getNews)
    .post(
        abacController.limitRole('HR'),
        filesController.uploadBannerPhoto,
        filesController.formatNewsImage,
        newsController.createNews,
    );
router
    .route('/:id')
    .get(newsController.getOneNews)
    .patch(
        abacController.limitRole('HR'),
        filesController.uploadBannerPhoto,
        filesController.formatNewsImage,
        newsController.updateNews
    )
    .delete(abacController.limitRole('HR'),newsController.deleteNews);

module.exports = router;