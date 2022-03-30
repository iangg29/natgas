const db = require('../db/database');
const Base = require('./base.model');

module.exports = class extends Base {
    static table = 'perfil';

    constructor({ name, lastname, email }) {
        super();
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.tableName = 'perfil';
    }

    async save() {
        const numero = await db
            .insert({
                name: this.name,
                lastname: this.lastname,
                email: this.email,
            })
            .into(this.tableName);
        return db.select('*').from(this.tableName).where({
            numero,
        });
    }
};
