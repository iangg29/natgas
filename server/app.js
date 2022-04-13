const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const compression = require('compression');

// ROUTERS
const bannerRouter = require('./routes/banner.routes');
const blogRouter = require('./routes/blog.routes');
const userRouter = require('./routes/user.routes');
const natgasblockRouter = require('./routes/natgasblock.routes');
const vacationsRouter = require('./routes/vacation.routes');
const reportRouter = require('./routes/report.routes');
const rowRouter = require('./routes/row.routes');
const departmentRouter = require('./routes/department.routes');
const rangosVacacionesRouter = require('./routes/rangovacaciones.routes');
const authRouter = require('./routes/auth.routes');
const newsRouter = require('./routes/news.routes');

// MIDDLEWARES
const authController = require('./controllers/auth.controller');
const abacController = require('./controllers/abac.controller');

// APP ERROR
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

app.enable('trust proxy');

app.use(cors());

app.options('*', cors());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
// SERVING STATIC FILES
app.use(express.static(`${__dirname}/public`));
app.use(express.static(`${__dirname}/public/blog`));

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
    max: 1000,
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
app.use(express.json()); // con esto le decimos que no se pase mas largo de este body
app.use(express.urlencoded({ extended: true })); // extended es para que nos permita hacer querys mas complejas
app.use(cookieParser());

app.use(compression());

// ROUTES -> estos son en realidad middlewares
app.get('/', (req, res) =>
    res.status(200).json({
        message:
            'Welcome to the natgas API, try hitting the /API/<yourResource> routes to know more',
    })
);
app.use('/auth', authRouter);
app.use(authController.protect);
app.use(abacController.getRole);
app.use('/api/banner/', bannerRouter);
app.use('/api/blog/', blogRouter);
app.use('/api/user/', userRouter);
app.use('/api/natgasblock/', natgasblockRouter);
app.use('/api/vacation/', vacationsRouter);
app.use('/api/report/', reportRouter);
app.use('/api/row/', rowRouter);
app.use('/api/department/', departmentRouter);
app.use('/api/rangos/', rangosVacacionesRouter);
app.use('/api/news/', newsRouter);

// ERROR HANDLER FOR UNHANDLED ROUTES
// el asterisco dice que en cualquiera salte
app.all('*', (req, res, next) => {
    const error = new AppError(
        `Can´t find ${req.originalUrl} on this server`,
        404
    );
    next(error);
});

app.use(globalErrorHandler);

module.exports = app;
