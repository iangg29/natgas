const knex = require('knex');
const { attachPaginate } = require('knex-paginate');
attachPaginate();

/* Creating a connection to the database. */
if (process.env.NODE_ENV === 'production') {
    const dbSocketPath = '/cloudsql';
    const db = knex({
        client: 'mysql',
        connection: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            socketPath: `${dbSocketPath}/${process.env.INSTANCE_CONNECTION_NAME}`

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



