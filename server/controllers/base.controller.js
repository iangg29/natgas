const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

/**
 * Delete a specific row from a table in the database.
 * @param {Obj} Model - The Model of the table to delete.
 * @param {string} field - The field to be searched when deleting
 * @return {function} - A function that deletes one row
 */
exports.deleteOne = (Model, field) =>
    catchAsync(async (req, res, next) => {
        await Model.deleteOne(field, req.params.id);

        res.status(204).json({
            status: 'success',
        });
    });

/**
 * Delete all rows from a table in the database.
 * @param {Obj} Model - The Model of the table to delete.
 * @return {function} - A function that deletes all rows of a table
 */
exports.deleteAll = (Model) =>
    catchAsync(async (req, res) => {
        await Model.deleteAll();
        res.status(204).json({
            status: 'success',
        });
    });

/**
 * Update a row from the database.
 * @param {Obj} Model - The Model of the table to update.
 * @param {string} field - The field to be searched by.
 * @return {function} - A function that updates one row
 */
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

/**
 * Create a row in the specified model.
 * @param {Obj} Model - The Model in which a new row will be created.
 * @return {function} - A function that creates one row
 */
exports.createOne = (Model) =>
    catchAsync(async (req, res, next) => {
        const document = await new Model(req.body).save();

        res.status(201).json({
            status: 'success',
            data: {
                new: document,
            },
        });
    });

/**
 * Get an array of rows that coincide wih the field and the request params.
 * @param {Obj} Model - The Model of the table to search in.
 * @param {string} field - The field to be searched by.
 * @return {function} - A function that querys based on certain conditions
 */
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

/**
 * Get an array of rows from a table.
 * @param {Obj} Model - The Model of the table to find.
 * @return {function} - A function that querys based on certain conditions
 */
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
