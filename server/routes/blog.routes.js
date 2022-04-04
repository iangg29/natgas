const express = require('express');
const multer = require('multer');
const blogController = require('../controllers/blog.controller');
const filesController = require('../controllers/files.controller');

const router = express.Router();

const upload = multer({ dest: 'public/blog' });

router
    .route('/')
    .get(blogController.getBlogs)
    .post(filesController.uploadBlogPhoto, blogController.createBlog);
router
    .route('/:id')
    .get(blogController.getBlogById)
    .patch(filesController.uploadBlogPhoto, blogController.updateBlog)
    .delete(blogController.deleteBlog);
router.route('/slug/:id').get(blogController.getBlogBySlug);

module.exports = router;
