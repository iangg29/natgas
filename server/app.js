const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const compression = require('compression');
const xss = require('xss-clean');

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
const asuetoRouter = require('./routes/asueto.routes');
const belongRouter = require('./routes/pertenece.routes');

// MIDDLEWARES
const authController = require('./controllers/auth.controller');
const abacController = require('./controllers/abac.controller');

// CRON TASKS
const {
    createUserNGBUpdateTask,
    createUpdateEmployeeVacationsTask,
} = require('./controllers/cron.controller');

// APP ERROR
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

app.enable('trust proxy');
app.use(cors());
app.options('*', cors());
app.use(xss());

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
                'Haz enviado muchas peticiones al servidor, espera un momento e intenta de nuevo.',
                429
            )
        );
    },
});

app.use('/api', limiter);

// REQUEST INFORMATION MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(compression());

// ROUTES -> estos son en realidad middlewares
app.get('/', (req, res) =>
    res.status(200).json({
        message:
            'Welcome to the natgas API, try hitting the /API/<yourResource> routes to know more',
    })
);
app.use('/api/auth', authRouter);
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
app.use('/api/asuetos/', asuetoRouter);
app.use('/api/pertenece/', belongRouter);

// ERROR HANDLER FOR UNHANDLED ROUTES
// el asterisco dice que en cualquiera salte
app.all('*', (req, res, next) => {
    const error = new AppError(
        `No se encontro ${req.originalUrl} en este servidor.`,
        404
    );
    next(error);
});

// CRON TASKS
createUserNGBUpdateTask();
createUpdateEmployeeVacationsTask();

app.use(globalErrorHandler);

module.exports = app;
