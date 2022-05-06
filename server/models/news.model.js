const db = require('../db/database');
const Base = require('./base.model');

module.exports = class News extends Base {
    static table = 'noticia';

    constructor({ name, date, image }) {
        super();
        this.name = name;
        this.image = image;
        this.date = date;

        this.tableName = 'noticia';
    }

    /**
     * It inserts a new row into the table with the name, date, and image properties of the object, and
     * then returns the row that was just inserted.
     * @returns The idNoticia is being returned.
     */
    async save() {
        const idNoticia = await db
            .insert({
                name: this.name,
                date: this.date,
                image: this.image,
            })
            .into(this.tableName);
        return db.select('*').from(this.tableName).where({
            idNoticia,
        });
    }
};
