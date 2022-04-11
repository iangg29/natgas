const makeFieldsPrivate = (table, ...fields) => {
    return (req, res, next) => {
        next();
    };
};

module.exports = makeFieldsPrivate;
