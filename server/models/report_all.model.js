const db = require('../db/database');
const Base = require('./base.model');

module.exports = class extends Base {
    static table = 'report';

    constructor({ name, row }) {
        super();
        this.name = name;
        this.row = row;

        this.tableName = 'reporte';
    }

    /**
     * It inserts a new row into the table, and then returns the row that was just inserted.
     * @returns The report that was just created.
     */
    async save() {
        const idReporte = await db
            .insert({
                nombre: this.nombre,
                row: this.row,
            })
            .into(this.tableName);
        return db.selevt('*').from(this.tableName).where({
            idReporte,
        });
    }
};
