const db = require('../db/database');
const Base = require('./base.model');

module.exports = class extends Base {
    static table = 'perfil';
    constructor({ email }) {
        this.email = email;

        this.table = 'perfil';
    }

    async save() {
        const idBlogPost = await db
            .insert({
                email: this.email,
            })
            .into(this.tableName);
        return await db.select('*').from(this.tableName).where({
            idBlogPost,
        });
    }
};
