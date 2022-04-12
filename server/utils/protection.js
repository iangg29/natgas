const db = require('../db/database');

/**
 * Remove fields from query string or makes them inaccessible.
 * @param {string} Model - The Model of the table to restrict.
 * @param {array} fields - The fields to be excluded.
 * @return {function} A function that restricts the fields that will be returned from the db.
 */
exports.makeFieldsPrivate = (Model, ...fields) => {
    return async (req, res, next) => {
        if (req.query.fields) {
            let queryFields = req.query.fields.split(',');
            queryFields = queryFields.filter((qf) => !fields.includes(qf));
            req.query.fields = queryFields.join(',');
        } else {
            const columnInfo = await db(Model.table).columnInfo();
            fields.forEach((field) => delete columnInfo[field]);
            req.query.fields = Object.keys(columnInfo).join(',');
        }
        next();
    };
};

/**
 * Remove data from the body of a request to prevent user from updating certain fields.
 * @param {array} fields - The fields to be excluded.
 * @return {function} A function that restricts the information contained in the body of a function.
 */
exports.protectBody = (...fields) => {
    return (req, res, next) => {
        fields.forEach((field) => req.body[field] && delete req.body[field]);
        next();
    };
};
