const db = require('../db/database');
const Base = require('./base.model');
const AppError = require('../utils/appError');

/** Class for the Pertenece resource */
module.exports = class Pertenece extends Base {
    static table = 'pertenece';

    constructor({ email, idDepartamento, position, date }) {
        super();
        this.email = email;
        this.idDepartamento = idDepartamento;
        this.position = position;
        this.date = date;

        this.tableName = 'pertenece';
    }

    /**
     * It inserts a new row into the table, and then returns the row that was just inserted.
     * @returns The idPertenece is being returned.
     */
    async save() {
        const idPertenece = await db
            .insert({
                email: this.email,
                idDepartamento: this.idDepartamento,
                position: this.position,
                date: this.date,
            })
            .into(this.tableName);
        return db.select('*').from(this.tableName).where({
            idPertenece,
        });
    }
};
