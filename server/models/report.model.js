const db = require('../db/database');
const Base = require('./base.model');

/** Class for the Report resource */
module.exports = class Report extends Base {
    static table = 'reporte';

    constructor({ name }) {
        super();
        this.name = name;

        this.tableName = 'reporte';
    }
    /**
     * It inserts a new row into the table, and then returns the row that was just inserted.
     * @returns The report id.
     */
    async save() {
        const report = await db
            .insert({
                name: this.name,
            })
            .into(this.tableName);

        return db.select('*').from(this.tableName).where({
            idReporte: report,
        });
    }
};
