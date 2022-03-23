const db = require('../db/database');
const APIFeatures = require(`../utils/apiFeatures`);

class Base {
    static table = '';

    constructor() {
    }

    static async getOne(field, id) {
        return db(this.table)
            .select('*')
            .where({
                [field]: id,
            });
    }

    static async updateOne(field, id, body) {
        const updatedId = await db(this.table)
            .update(body)
            .where({
                [field]: id,
            });

        return db
            .select('*')
            .from(this.table)
            .where({
                [field]: updatedId,
            });
    }

    static async deleteOne(field, id) {
        return db(this.table)
            .where({
                [field]: id,
            })
            .del();
    }

    static async getAll(queryString) {
        const features = new APIFeatures(this.table, queryString)
            .filter()
            .sort()
            .limitFields()
            .paginate();

        // la query que hemos modificado ahora vive dentro de features
        return await features.request();
    }
}

module.exports = Base;
