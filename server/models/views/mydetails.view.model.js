const Base = require('../base.model');
const db = require('../../db/database');

module.exports = class extends Base {
    static table = 'detallesempleado';
    static tableReference = db(this.table);

    constructor() {
        super();
    }
};