const db = require('../db/database');
const Base = require('./base.model');
const cron = require('node-cron');
const AppError = require('../utils/appError');

/** Class for the Blogs resource */
module.exports = class Blog extends Base {
    static table = 'blogpost';

    constructor({ date, title, content, image }) {
        super();
        this.date = date;
        this.title = title;
        this.content = content;
        this.image =
            image || 'https://storage.googleapis.com/natgas-media/default.png';

        this.tableName = 'blogpost';
        this.slug = this.title.toLowerCase().split(' ').join('-');
    }

    /**
     * It creates a blog post and sets a cron job to delete it in two months.
     * @returns The blog that was just created.
     */
    async save() {
        const previous = await db(this.tableName).where({
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

        // CREATE A DELETE DATE IN THE FUTURE
        const deleteDate = new Date(
            new Date(this.date).getDate() + 1000 * 60 * 60 * 24 * 30 * 2
        );

        const cronExpr = `${deleteDate.getMinutes()} ${deleteDate.getHours()} ${deleteDate.getDate()} ${deleteDate.getMonth()} ${deleteDate.getDay()}`;

        // SET CRON
        cron.schedule(
            cronExpr,
            async function () {
                await Blog.deleteOne('idBlogPost', idBlogPost);

                console.log('Destroyed Blog: ', idBlogPost);
            },
            false
        );

        return db.select('*').from(this.tableName).where({
            idBlogPost,
        });
    }
};
