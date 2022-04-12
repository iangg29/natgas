const db = require('../db/database');
const Base = require('./base.model');

module.exports = class extends Base {
    static table = 'noticia';

    constructor({ name, date, image }) {
        super();
        this.name = name;
        this.image = image;
        this.date = new Date(date);

        this.tableName = 'noticia';
    }

    async save() {
        const idNoticia = await db.insert({
            name: this.name,
            date: this.date,
            image: this.image,
        }).into(this.tableName);
        return db.select('*').from(this.tableName).where({
            idNoticia,
        });
    }
};