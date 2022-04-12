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
router.route('/:id').delete(newsController.deleteNews);

module.exports = router;