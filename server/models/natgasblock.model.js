const db = require('../db/database');
const Base = require('./base.model');

module.exports = class extends Base {
    static table = 'natgasblock';

    constructor({ date, period, email }) {
        super();
        this.date = date;
        this.period = period;
        this.email = email;

        this.tableName = 'natgasblock';
    }

    async save() {
        const idNatgasblock = await db
            .insert({
                date: this.date,
                period: this.period,
                email: this.email,
            })
            .into(this.tableName);
        return db.select('*').from(this.tableName).where({
            idNatgasblock,
        });
    }
};
