const db = require('../db/database');
const Base = require('./base.model');

module.exports = class extends Base {
    static table = 'asueto';

    constructor({ date }) {
        super();
        this.date = date;
        this.tableName = 'asueto';
    }

    async save() {
        const idAsueto = await db
            .insert({
                date: this.date,
            })
            .into(this.tableName);
        return db.select('*').from(this.tableName).where({
            idAsueto,
        });
    }
};
