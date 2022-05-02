const multer = require('multer');
const sharp = require('sharp');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const createUpload = () => {
    const multerStorage = multer.memoryStorage();

    const multerFilter = (req, file, cb) => {
        if (file.mimetype.startsWith('image')) {
            cb(null, true);
        } else {
            cb(
                new AppError(
                    'El archivo no es una imagen. Intenta de nuevo.',
                    404
                ),
                false
            );
        }
    };
    return multer({ storage: multerStorage, filter: multerFilter });
};

exports.formatBlogImage = catchAsync(async (req, res, next) => {
    if (!req.file) return next();

    // FORMAT file
    req.body.image = `blog-${Date.now()}.jpeg`;
    await sharp(req.file.buffer)
        .toFormat('jpeg')
        .jpeg({ quality: 90 })
        .toFile(`public/blog/${req.body.image}`);

    next();
});

exports.formatNewsImage = catchAsync(async (req, res, next) => {
    if (!req.file) return next();

    // FORMAT file
    req.body.image = `news-${Date.now()}.jpeg`;
    await sharp(req.file.buffer)
        .resize(500, 500)
        .toFormat('jpeg')
        .jpeg({ quality: 90 })
        .toFile(`public/news/${req.body.image}`);

    next();
});

exports.uploadBlogPhoto = createUpload().single('blog_photo');
exports.uploadBannerPhoto = createUpload().single('news_photo');
