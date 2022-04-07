const base = require('./base.controller');
const Banner = require('../models/banner.model');

exports.getBanners = base.getAll(Banner);
exports.getBannerById = base.getOne(Banner, 'idNoticia');
exports.createBanner = base.createOne(Banner);
exports.updateBanner = base.updateOne(Banner, 'idNoticia');
exports.deleteBanner = base.deleteOne(Banner, 'iidNoticia');
