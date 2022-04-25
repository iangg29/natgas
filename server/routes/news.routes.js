const express = require('express');
const newsController = require('../controllers/news.controller');
const filesController = require('../controllers/files.controller');

const router = express.Router();

router
    .route('/')
    .get(newsController.getNews)
    .post(
        filesController.uploadBannerPhoto,
        filesController.formatNewsImage,
        newsController.createNews,
    );
router
    .route('/:id')
    .get(newsController.getOneNews)
    .patch(
        filesController.uploadBannerPhoto,
        filesController.formatNewsImage,
        newsController.updateNews
    )
    .delete(newsController.deleteNews);

module.exports = router;