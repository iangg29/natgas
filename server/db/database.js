const knex = require('knex');
const { attachPaginate } = require('knex-paginate');
attachPaginate();

/* Creating a connection to the database. */

if(process.env.NODE_ENV === "production"){
    const db = knex({
        client: 'mysql',
        connection: {
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            socketPath: '/cloudsql/smart-code-itesm:us-central1:natgas-db',
            

        },
    });
    module.exports = db;

    
}else{
    const db = knex({
        client: 'mysql',
        connection: {
            user: process.env.DB_USERNAME,
            port: process.env.DB_PORT,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            host: process.env.DB_HOST,
            

        },
    });
    module.exports = db;
}
    






