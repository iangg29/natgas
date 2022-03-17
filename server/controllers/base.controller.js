const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const db = require('../db/database');

const APIFeatures = require(`../utils/apiFeatures`);

// esta es la generalizacion, esta va a funcionar para cada modelo
exports.deleteOne = (table, field) =>
    catchAsync(async (req, res, next) => {
        await db(table)
            .where({
                [field]: req.params.id,
            })
            .del();

        res.status(204).json({
            status: 'success',
        });
    });

exports.updateOne = (table, field) =>
    catchAsync(async (req, res, next) => {
        const updatedId = await db(table)
            .update(req.body)
            .where({
                [field]: req.params.id,
            });

        const doc = await db
            .select('*')
            .from(table)
            .where({
                [field]: updatedId,
            });

        if (!doc) {
            // ESTE ES SOLO PARA IDS QUE TENGAN FORMATO VALIDO
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
        const document = await new Model(req.body).save();

        res.status(201).json({
            status: 'success',
            data: {
                new: document,
            },
        });
    });

exports.getOne = (table, field) =>
    catchAsync(async (req, res, next) => {
        req.query = { [field]: req.params.id };

        const query = new APIFeatures(table, req.query).filter();

        const document = (await query.request())[0];

        if (!document) {
            // ESTE ES SOLO PARA IDS QUE TENGAN FORMATO VALIDO
            const error = new AppError('No document found with that ID', 404);
            return next(error);
        }

        res.status(200).json({
            status: 'success',
            data: {
                document,
            },
        });
    });

exports.getAll = (table) =>
    catchAsync(async (req, res) => {
        const features = new APIFeatures(table, req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate();

        // la query que hemos modificado ahora vive dentro de features
        const documents = await features.request();

        // SEND RESPONSE
        res.status(200).json({
            status: 'success',
            results: documents.length,
            data: { documents },
        });
    });
