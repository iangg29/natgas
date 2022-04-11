const db = require('./../db/database');

/**
 * Remove fields from query string or makes them inaccessible.
 * @constructor
 * @param {string} Model - The Model of the table to restrict.
 * @param {array} fields - The fields to be excluded.
 */
const makeFieldsPrivate = (Model, ...fields) => {
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

module.exports = makeFieldsPrivate;
