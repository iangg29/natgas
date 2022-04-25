const db = require('../db/database');
const Base = require('./base.model');
const AppError = require('../utils/appError');

module.exports = class extends Base {
    static table = 'pertenece';

    constructor({ email, idDepartamento, position, date }){
        super();
        this.email = email;
        this.idDepartamento = idDepartamento;
        this.position = position;
        this.date = date;

        this.tableName = 'pertenece';
    }

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