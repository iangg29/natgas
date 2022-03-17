const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const compression = require('compression');

// ROUTERS
const blogRouter = require('./routes/blogs.routes');

// APP ERROR
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

app.enable('trust proxy');

app.use(
    cors({
        origin: true,
        credentials: true,
    })
);

app.options('*', cors());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
// SERVING STATIC FILES
app.use(express.static(`${__dirname}/public`));

// SECURITY HEADERS
app.use(
    helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'self'", 'https:', 'http:', 'data:', 'ws:'],
            baseUri: ["'self'"],
            fontSrc: ["'self'", 'https:', 'http:', 'data:'],
            scriptSrc: ["'self'", 'https:', 'http:', 'blob:'],
            styleSrc: ["'self'", "'unsafe-inline'", 'https:', 'http:'],
            imgSrc: ["'self'", 'data:', 'blob:'],
        },
    })
);

const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    handler: function (req, res, next) {
        return next(
            new AppError(
                'You sent too many requests. Please wait a while then try again',
                429
            )
        );
    },
});

app.use('/api', limiter);

// BODY PARSER, reading from body into req.body
app.use(express.json({ limit: '10kb' })); // con esto le decimos que no se pase mas largo de este body
app.use(express.urlencoded({ extnded: true, limt: '10kb' })); // extended es para que nos permita hacer querys mas complejas
app.use(cookieParser());

app.use(compression());

// ROUTES -> estos son en realidad middlewares
app.get('/', (req, res) =>
    res.status(200).json({
        message:
            'Welcome to the natgas API, try hitting the /API/<yourResource> routes to know more',
    })
);
app.use('/api/blog/', blogRouter);

// ERROR HANDLER FOR UNHANDLED ROUTES
// el asterizco dice que en cualquiera salte
app.all('*', (req, res, next) => {
    const error = new AppError(
        `Can´t find ${req.originalUrl} on this server`,
        404
    );

    next(error);
});

app.use(globalErrorHandler);

module.exports = app;
