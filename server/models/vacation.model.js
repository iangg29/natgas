const db = require('../db/database');
const Base = require('./base.model');

module.exports = class extends Base {
    static table = 'vacaciones';

    constructor({ startdate, enddate, substitute, email }) {
        super();
        this.startdate = startdate;
        this.enddate = enddate;
        this.substitute = substitute;
        this.email = email;

        this.tableName = 'vacaciones';
    }

    async save() {
        const idVacaciones = await db
            .insert({
                startdate: this.startdate,
                enddate: this.enddate,
                substitute: this.substitute,
                email: this.email,
            })
            .into(this.tableName);
        return db.select('*').from(this.tableName).where({
            idVacaciones,
        });
    }
};
