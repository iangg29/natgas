const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

// esta es la generalizacion, esta va a funcionar para cada modelo
exports.deleteOne = (Model, field) =>
    catchAsync(async (req, res, next) => {
        await Model.deleteOne(field, req.params.id);

        res.status(204).json({
            status: 'success',
        });
    });

exports.updateOne = (Model, field) =>
    catchAsync(async (req, res, next) => {
        const doc = await Model.updateOne(field, req.params.id, req.body);

        if (!doc[0]) {
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

exports.getOne = (Model, field) =>
    catchAsync(async (req, res, next) => {
        const document = await Model.getOne(field, req.params.id);

        // if (!document[0]) {
        //     // ESTE ES SOLO PARA IDS QUE TENGAN FORMATO VALIDO
        //     const error = new AppError('No document found with that ID', 404);
        //     return next(error);
        // }

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
        console.log('HOLA');

        // SEND RESPONSE
        res.status(200).json({
            status: 'success',
            results: documents.length,
            data: { documents },
        });
    });
