const multer = require('multer');
const sharp = require('sharp');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const gc = require('../config/config');
const bucket = gc.bucket(process.env.GCS_BUCKET);
const { format } = require('util');

/**
 *
 * @param { File } object file object that will be uploaded
 * @param { resource } string type of reasource to be uploaded
 * @description - This function does the following
 * - It uploads a file to the image bucket on Google Cloud
 * - It accepts an object as an argument with the
 *   "originalname" and "buffer" as keys
 */

const uploadImage = async (file, resource) => {
    let { originalname, buffer } = file;
    let filename = originalname;
    if (resource === 'blog') {
        buffer = await sharp(buffer)
            .toFormat('jpeg')
            .jpeg({ quality: 90 })
            .toBuffer();
        filename = new Date().getTime() + '-blog-' + originalname;
    } else if (resource === 'news') {
        buffer = await sharp(buffer)
            .resize(500, 500)
            .toFormat('jpeg')
            .jpeg({ quality: 90 })
            .toBuffer();
        filename = new Date().getTime() + '-news-' + originalname;
    }
    return new Promise((resolve, reject) => {
        const blob = bucket.file(filename);
        const blobStream = blob.createWriteStream({
            resumable: false,
        });
        blobStream
            .on('finish', () => {
                const publicUrl = format(
                    `https://storage.googleapis.com/${bucket.name}/${blob.name}`
                );
                resolve(publicUrl);
            })
            .on('error', (err) => {
                console.log('ERROR UPLOADING IMAGE', err);
                reject(`Unable to upload image, something went wrong`);
            })
            .end(buffer);
    });
};

/**
 * This function creates a multer object that will be used to upload images to the server.
 * @returns an object with two properties: storage and filter.
 */
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
    req.body.image = await uploadImage(req.file, 'blog');

    next();
});

exports.formatNewsImage = catchAsync(async (req, res, next) => {
    if (!req.file) return next();

    // FORMAT file
    req.body.image = await uploadImage(req.file, 'news');

    next();
});

exports.uploadBlogPhoto = createUpload().single('blog_photo');
exports.uploadBannerPhoto = createUpload().single('news_photo');
