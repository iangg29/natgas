const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

/**
 * Delete all rows from a table in the database.
 * @constructor
 * @param {string} Model - The Model of the table to delete.
 * @param {array} field - The field to be searched when deleting
 */
exports.deleteOne = (Model, field) =>
    catchAsync(async (req, res, next) => {
        await Model.deleteOne(field, req.params.id);

        res.status(204).json({
            status: 'success',
        });
    });

exports.deleteAll = (Model) =>
    catchAsync(async (req, res) => {
        await Model.deleteAll();
        res.status(204).json({
            status: 'success',
        });
    });

exports.updateOne = (Model, field) =>
    catchAsync(async (req, res, next) => {
        const doc = await Model.updateOne(field, req.params.id, req.body);

        if (!doc[0]) {
            const error = new AppError('No document found with that ID', 404);
            return next(error);
        }

        res.status(200).json({
            status: 'success',
            data: { data: doc },
        });
    });

exports.createOne = (Model) =>
    catchAsync(async (req, res, next) => {
        console.log(req.body);
        const document = await new Model(req.body).save();

        res.status(201).json({
            status: 'success',
            data: {
                new: document,
            },
        });
    });

exports.getOne = (Model, field) =>
    catchAsync(async (req, res, next) => {
        const document = await Model.getOneLimit(
            field,
            req.params.id,
            req.query
        );

        res.status(200).json({
            status: 'success',
            data: {
                document,
            },
        });
    });

exports.getAll = (Model) =>
    catchAsync(async (req, res) => {
        const documents = await Model.getAll(req.query);

        // SEND RESPONSE
        res.status(200).json({
            status: 'success',
            results: documents.length,
            data: { documents },
        });
    });
