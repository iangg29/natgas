const express = require('express');
const blogController = require('../controllers/blog.controller');
const filesController = require('../controllers/files.controller');
const abacController = require("../controllers/abac.controller");

const router = express.Router();

router
    .route('/')
    .get(blogController.getBlogs)
    .post(
        abacController.limitRole('HR'),
        filesController.uploadBlogPhoto,
        filesController.formatBlogImage,
        blogController.createBlog
    );
router
    .route('/:id')
    .get(blogController.getBlogById)
    .patch(
        abacController.limitRole('HR'),
        filesController.uploadBlogPhoto,
        filesController.formatBlogImage,
        blogController.updateBlog
    )
    .delete( abacController.limitRole('HR'), blogController.deleteBlog);
router.route('/slug/:id').get(blogController.getBlogBySlug);

module.exports = router;
