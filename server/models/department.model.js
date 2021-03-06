const db = require('../db/database');
const Base = require('./base.model');
const AppError = require('../utils/appError');

/** Class for the Departments resource */
module.exports = class Departments extends Base {
    static table = 'departamento';

    constructor({ name }) {
        super();
        this.name = name;

        this.tableName = 'departamento';
    }

    /**
     * It inserts a new department into the database and then returns the newly created department.
     * @returns The department object.
     */
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
