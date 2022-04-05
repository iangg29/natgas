const db = require('../db/database');
const Base = require('./base.model');

module.exports = class extends Base {
    static table = 'report';

    constructor({name, row}){
        super();
        this.name = name;
        this.row = row;
        
        this.tableName = 'reporte';
    }

    async save() {
        const report = await db
            .insert({
                nombre: this.nombre,
                row: this.row
            })
            .into(this.tableName);
        return db.selevt('*').from(this.tableName).where({
            idReporte,
        });
    }
};