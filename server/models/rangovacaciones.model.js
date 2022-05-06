const db = require('../db/database');
const Base = require('./base.model');

/** Class for the Rangovacaciones resource */
module.exports = class VacationsRange extends Base {
    static table = 'rangovacaciones';

    constructor({ maximum, minimum, days }) {
        super();
        this.maximum = maximum;
        this.minimum = minimum;
        this.days = days;
        this.tableName = 'rangovacaciones';
    }

    /**
     * It inserts a new row into the table, and then returns the row that was just inserted.
     * @returns The idRangoVacaciones is being returned.
     */
    async save() {
        const idRangoVacaciones = await db
            .insert({
                maximum: this.maximum,
                minimum: this.minimum,
                days: this.days,
            })
            .into(this.tableName);
        return db.select('*').from(this.tableName).where({
            idRangoVacaciones,
        });
    }

    /**
     * It returns the number of vacation days for a given number of years of service.
     * @param years - number
     * @returns An array of objects.
     */
    static async calcVacDays(years) {
        return await db
            .select('days')
            .from(this.table)
            .where('minimum', '<=', years)
            .andWhere('maximum', '>=', years);
    }
};
