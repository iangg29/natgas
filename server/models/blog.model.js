const db = require('../db/database');
const Base = require('./base.model');

module.exports = class extends Base {
    static table = 'blogpost';

    constructor({ date, title, content, image }) {
        super();
        this.date = new Date (date);
        this.title = title;
        this.content = content;
        this.image = image || 'default.png';

        this.tableName = 'blogpost';
        this.slug = title.toLowerCase().split(' ').join('-');
    }

    async save() {
        const idBlogPost = await db
            .insert({
                date: this.date,
                title: this.title,
                content: this.content,
                image: this.image,
                slug: this.slug,
            })
            .into(this.tableName);
        return db.select('*').from(this.tableName).where({
            idBlogPost,
        });
    }
};