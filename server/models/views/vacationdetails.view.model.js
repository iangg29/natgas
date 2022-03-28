const Base = require('../base.model');
const db = require('../../db/database');

module.exports = class extends Base {
    static table = 'detallesdevacaciones';
    static tableReference = db(this.table);

    constructor() {}
};
