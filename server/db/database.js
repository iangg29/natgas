const knex = require('knex');
const { attachPaginate } = require('knex-paginate');
attachPaginate();

/* Creating a connection to the database. */
if (process.env.NODE_ENV === 'production') {
    const dbSocketPath = '/cloudsql';
    const db = knex({
        client: 'mysql',
        connection: {
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            host: process.env.INSTANCE_UNIX_SOCKET,

        },
    });
    module.exports = db;
}

else{
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

}



