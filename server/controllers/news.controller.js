const base = require('./base.controller');
const News = require('../models/news.model');

exports.getNews = base.getAll(News);
exports.getOneNews = base.getOne(News, 'idNoticia');
exports.createNews = base.createOne(News);
exports.deleteNews = base.deleteOne(News, 'idNoticia')
exports.updateNews = base.updateOne(News, 'idNoticia');

