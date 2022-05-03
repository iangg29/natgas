const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

/* This is a process event listener that will catch any unhandled exceptions and log them to the
console. It will then exit the process with a status code of 1. */
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
/* This is a process event listener that will catch any unhandled rejections and log them to the
console. It will then exit the process with a status code of 1. */

process.on('unhandledRejection', (err) => {
    console.log(err.name, err.message);
    console.log('UNHANDLED REJECTION!: SHUTTING DOWN');

    server.close(() => {
        process.exit(1);
    });
});
