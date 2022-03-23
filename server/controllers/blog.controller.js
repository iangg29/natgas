const base = require('./base.controller');
const Blog = require('../models/blog.model');

exports.getBlogs = base.getAll(Blog);
exports.getBlogById = base.getOne(Blog, 'idBlogPost');
exports.getBlogBySlug = base.getOne(Blog, 'slug');
exports.createBlog = base.createOne(Blog);
exports.updateBlog = base.updateOne(Blog, 'idBlogPost');
exports.deleteBlog = base.deleteOne(Blog, 'idBlogPost');
