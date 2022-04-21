const db = require('../db/database');
const APIFeatures = require(`../utils/apiFeatures`);

/** Base class with all static attributes that will be inherited by the data models */
class Base {
    static table = '';
    static tableReference = db(this.table);

    constructor() {}

    /**
     * Save the current instance of the class in its corresponding database.
     * @return {promise} - A promise that the new row will be created in its corresponding database.
     */
    async save() {}

    /**
     * Get one document from the current model.
     *  @param {string} field - The name of the field in the database to searchby.
     *  @param {string} id - The value to look for in the database.
     * @return {promise} - A promise that one value will be returned.
     */
    static getOne(field, id) {
        return db(this.table)
            .select('*')
            .where({
                [field]: id,
            });
    }

    /**
     * Get one document with its fields limited by a queryString, this is the safe version of getOne.
     *  @param {string} field - The name of the field in the database to searchby.
     *  @param {string} id - The value to look for in the database.
     *  @param {object} queryString - The query object to filter by.
     * @return {promise} - A promise that one value will be returned.
     */
    static async getOneLimit(field, id, queryString) {
        const features = new APIFeatures(this.table, queryString)
            .filter()
            .limitFields();
        return features.query.where({
            [field]: id,
        });
    }

    /**
     * Update one document.
     *  @param {string} field - The name of the field in the database to searchby.
     *  @param {string} id - The value to look for in the database.
     *  @param {object} body - The values to use to update the document.
     * @return {obj} - A knex queryobj that will get the new value.
     */
    static async updateOne(field, id, body) {
        await db(this.table)
            .update(body)
            .where({
                [field]: id,
            });
        return db
            .select('*')
            .from(this.table)
            .where({
                [field]: id,
            });
    }

    /**
     * Delete one document.
     *  @param {string} field - The name of the field in the database to searchby.
     *  @param {string} id - The value to look for in the database.
     */
    static async deleteOne(field, id) {
        await db(this.table)
            .where({
                [field]: id,
            })
            .del();
    }

    /**
     * Delete all documents from the current model.
     */
    static async deleteAll() {
        await db(this.table).del();
    }

    /**
     * Get several documents with the APIFeatures functionality.
     *  @param {object} queryString - The query object to filter by.
     * @return {promise} - A promise that the requested values will be returned.
     */
    static async getAll(queryString) {
        const features = new APIFeatures(this.table, queryString)
            .filter()
            .search()
            .sort()
            .limitFields()
            .paginate();

        // la query que hemos modificado ahora vive dentro de features
        return await features.request();
    }
}

module.exports = Base;
