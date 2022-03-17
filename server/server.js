const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

process.on('unhandledException', (err) => {
    console.log('UNHANDLED EXCEPTION!: SHUTTING DOWN');
    console.log(err.name, err.message);
    console.log(err);
    process.exit(1);
});

const app = require(`${__dirname}/app.js`);

const port = process.env.PORT || 5959;

const server = app.listen(port, () => {
    console.log(`Server running on ${port}...`);
});

process.on('unhandledRejection', (err) => {
    console.log(err.name, err.message);
    console.log('UNHANDLED REJECTION!: SHUTTING DOWN');

    server.close(() => {
        process.exit(1);
    });
});
// esta es una red que atrapara todas las promesas rechazadas no atrapadas
