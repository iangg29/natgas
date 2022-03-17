const base = require('./base.controller');
const Blog = require('../models/blog.model');

exports.getBlogs = base.getAll('blogpost');
exports.getBlogById = base.getOne('blogpost', 'idBlogPost');
exports.getBlogBySlug = base.getOne('blogpost', 'Slug');
exports.createBlog = base.createOne(Blog);
exports.updateBlog = base.updateOne('blogpost', 'idBlogPost');
exports.deleteBlog = base.deleteOne('blogpost', 'idBlogPost');
