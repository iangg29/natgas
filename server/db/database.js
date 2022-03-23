const knex = require('knex');
const { attachPaginate } = require('knex-paginate');
attachPaginate();

const db = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
    },
});

module.exports = db;
