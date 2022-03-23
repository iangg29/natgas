const db = require('../db/database');
const Base = require('./base.model');

module.exports = class extends Base {
    static table = 'Perfil';

    constructor({ email }) {
        super();
        this.email = email;
        this.tableName = 'Perfil';
    }

    async save() {
        const idPerfil = await db
            .insert({
                email: this.email,
            })
            .into(this.tableName);
        return db.select('*').from(this.tableName).where({
            idPerfil,
        });
    }
};
