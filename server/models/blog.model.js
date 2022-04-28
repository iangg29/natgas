const db = require('../db/database');
const Base = require('./base.model');
const { createBlogDeleteTask } = require('../controllers/cron.controller');
const AppError = require('../utils/appError');

module.exports = class Blog extends Base {
    static table = 'blogpost';

    constructor({ date, title, content, image }) {
        super();
        this.date = date;
        this.title = title;
        this.content = content;
        this.image = image || 'default.png';

        this.tableName = 'blogpost';
        this.slug = this.title.toLowerCase().split(' ').join('-');
    }

    async save() {
        const previous = await db(tableName).where({
            slug: this.slug,
        });
        if (previous.length > 0)
            throw new AppError('Ya existe un blog con este nombre', 400);

        if (new Date(this.date) < new Date())
            throw new AppError('No se pueden crear blogs en el pasado', 400);

        const idBlogPost = await db
            .insert({
                date: this.date,
                title: this.title,
                content: this.content,
                image: this.image,
                slug: this.slug,
            })
            .into(this.tableName);

        createBlogDeleteTask(idBlogPost, this.date);

        return db.select('*').from(this.tableName).where({
            idBlogPost,
        });
    }
};
