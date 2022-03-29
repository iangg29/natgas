const db = require('../db/database');
const Base = require('./base.model');

module.exports = class extends Base {
    static table = 'perfil';

    constructor({ name, lastname, email, number }) {
        super();
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.number = number;
        this.tableName = 'perfil';
    }

    async save() {
        const idPerfil = await db
            .insert({
                name: this.name,
                lastname: this.lastname,
                email: this.email,
                number: this.number
            })
            .into(this.tableName);
        return db.select('*').from(this.tableName).where({
            number,
        });
    }
};
