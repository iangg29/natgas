const express = require('express');
const blogController = require('../controllers/blog.controller');

const router = express.Router();

router.route('/').get(blogController.getBlogs).post(blogController.createBlog);
router
    .route('/:id')
    .get(blogController.getBlogById)
    .patch(blogController.updateBlog)
    .delete(blogController.deleteBlog);
router.route('/slug/:id').get(blogController.getBlogBySlug);

module.exports = router;
