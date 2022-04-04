const multer = require('multer');
const sharp = require('sharp');

const multerStorage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'public/blog');
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split('/')[1];
        const filename = `blog-${Date.now()}.${ext}`;
        req.body.image = filename;
        cb(null, filename);
    },
});

const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
        cb(null, true);
    } else {
        cb(
            new AppError('Not an image, please upload only images.', 404),
            false
        );
    }
};

const upload = multer({ storage: multerStorage, filter: multerFilter });

exports.uploadBlogPhoto = upload.single('blog_photo');
