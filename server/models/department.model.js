const db = require('../db/database');
const Base = require('./base.model');
const AppError = require('../utils/appError');

module.exports = class extends Base {
    static table = 'departamento';

    constructor({ name }) {
        super();
        this.name = name;

        this.tableName = 'departamento';
    }

    async save() {
        const department = await db
            .insert({
                name: this.name,
            })
            .into(this.tableName);

        return db.select('*').from(this.tableName).where({
            idDepartamento: department,
        });
    }
};
