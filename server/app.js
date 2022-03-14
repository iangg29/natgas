const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const hpp = require('hpp');
const compression = require('compression');

// ROUTERS

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

// SERVING STATIC FILES
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

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

// Para prevenir que nos metan varias veces un parametro -- parameter pollution -> limpia el query string
app.use(
    hpp({
        // arreglo de los duplicados permitidos
        whitelist: [
            'duration',
            'name',
            'ratingsQuantity',
            'ratingsAverage',
            'maxGroupSize',
            'difficulty',
            'price',
        ],
    })
);

app.use(compression());

app.use((req, res, next) => {
    // console.log(req.cookies);
    next();
});

// ROUTES -> estos son en realidad middlewares

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
