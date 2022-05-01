const base = require('./base.controller');
const Pertenece = require('../models/pertenece.model');
const catchAsync = require('../utils/catchAsync');
const { rawListeners } = require('../app');

exports.getPertenece = catchAsync(async (req, res, next) => {
    const document = await Pertenece.getAll({
        sort: '-date',
        email: req.params.id,
    });

    res.status(200).json({
        status: 'success',
        data: {
            document,
        },
    });
});
exports.createPertenece = base.createOne(Pertenece);
exports.updatePertenece = base.updateOne(Pertenece, 'email');
exports.deletePertenece = base.deleteOne(Pertenece, 'email');
