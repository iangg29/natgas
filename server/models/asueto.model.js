const db = require('../db/database');
const Base = require('./base.model');

module.exports = class extends Base {
    static table = 'asueto';

    constructor({ date }) {
        super();
        this.date = date;
        this.tableName = 'asueto';
    }

    /**
     * It inserts a new row into the table with the date and returns the row with the idAsueto.
     * @returns The idAsueto is being returned.
     */
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
