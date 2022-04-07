const db = require('../db/database');
const Base = require('./base.model');

module.exports = class extends Base {
    static table = 'rangovacaciones';

    constructor({ maximum, minimum, days }) {
        super();
        this.maximum = maximum;
        this.minimum = minimum;
        this.days = days;
        this.tableName = 'rangovacaciones';
    }

    async save() {
        const idRangoVacaciones = await db.insert({
            maximum: this.maximum,
            minimum: this.minimum,
            days: this.days,
        }).into(this.tableName);
        return db.select('*').from(this.tableName).where({
            idRangoVacaciones,
        });
    }
};