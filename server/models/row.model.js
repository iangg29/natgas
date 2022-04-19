const db = require('../db/database');
const Base = require('./base.model');

module.exports = class extends Base {
    static table = 'registro';

    constructor({ value, date, created_at, updated_at, idReporte }) {
        super();
        this.value = value;
        this.date = date;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.idReporte = idReporte;

        this.tableName = 'registro';
    }
    async save() {
        const Register = await db
            .insert({
                value: this.value,
                date: this.date,
                idReporte: this.idReporte,
                created_at: this.created_at,
                updated_at: this.updated_at,
            })
            .into(this.tableName);

        return db.select('*').from(this.tableName).where({
            idRegistro: Register,
        });
    }
};
