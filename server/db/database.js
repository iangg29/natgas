const knex = require('knex');
const { attachPaginate } = require('knex-paginate');
attachPaginate();

const db = knex({
    client: 'mysql',
    connection: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'natgas',
    },
});

module.exports = db;
