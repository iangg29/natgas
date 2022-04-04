const express = require('express');
const multer = require('multer');
const blogController = require('../controllers/blog.controller');
const filesController = require('../controllers/files.controller');

const router = express.Router();

router
    .route('/')
    .get(blogController.getBlogs)
    .post(
        filesController.uploadBlogPhoto,
        filesController.formatBlogImage,
        blogController.createBlog
    );
router
    .route('/:id')
    .get(blogController.getBlogById)
    .patch(
        filesController.uploadBlogPhoto,
        filesController.formatBlogImage,
        blogController.updateBlog
    )
    .delete(blogController.deleteBlog);
router.route('/slug/:id').get(blogController.getBlogBySlug);

module.exports = router;
