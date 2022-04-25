const db = require('../db/database');

/** Class representing the API url-encoded filtering, sorting, selecting, limiting and searching options.  */
class APIFeatures {
    /**
     * Create an instance of APIFeatures.
     * @param {string} table - The name of the table in the database.
     * @param {object} queryString - The query object in the req.
     */
    constructor(table, queryString) {
        (this.table = table), (this.queryString = queryString);
        this.query = db.table(table);
    }

    /**
     * Use the properties that end with _like in the queryString to perform a whereLike method.
     * @return {object} - The current instance.
     */
    search() {
        Object.keys(this.queryString).forEach((el) =>
            el.endsWith('like')
                ? this.query.whereLike(
                      el.split('_')[0],
                      `${this.queryString[el]}%`
                  )
                : true
        );
        return this;
    }

    /**
     * Use the properties different to 'page', 'sort', 'limit', 'fields' in the queryString to perform a where method.
     * @return {object} - The current instance.
     */
    filter() {
        const queryObj = { ...this.queryString };
        const excludeFields = ['page', 'sort', 'limit', 'fields'];

        // remove fields not relevant for this process
        excludeFields.forEach((el) => delete queryObj[el]);
        // remove search fields
        Object.keys(queryObj).forEach((el) =>
            el.endsWith('like') ? delete queryObj[el] : true
        );

        // Filter or
        Object.keys(queryObj).forEach((key) => {
            // parameters with , will be filtered here
            if (queryObj[key].includes(',')) {
                const values = queryObj[key].split(',');
                // to chain a whereor we need to do it inside a where statement
                this.query.where(function () {
                    for (let i = 0; i < values.length; i++) {
                        // this keyword refers to the overall query
                        if (i === 0) this.where(key, values[i]);
                        else this.orWhere(key, values[i]);
                    }
                });
                // we delete it, so we don't filter with it again
                delete queryObj[key];
            }
        });

        // Filtering all
        this.query.where(queryObj);

        // para poderlo encadenar
        return this;
    }

    /**
     * Use the property sort in the queryString to perform different orderBy methods.
     * @return {object} - The current instance.
     */
    sort() {
        if (this.queryString.sort) {
            const sortBy = this.queryString.sort.split(',');
            sortBy.forEach((sort) => {
                if (sort.includes('-')) {
                    this.query.orderBy(sort.split('-')[1], 'desc');
                } else this.query.orderBy(sort, 'asc');
            });
        }

        return this;
    }

    /**
     * Use the property fields in the queryString to perform a select method.
     * @return {object} - The current instance.
     */
    limitFields() {
        if (this.queryString.fields) {
            const fields = this.queryString.fields.split(',');
            this.query.select(fields);
        }

        return this;
    }

    /**
     * Use the properties page and limit in the queryString to perform pagination on the results.
     * @return {object} - The current instance.
     */
    paginate() {
        const currentPage = this.queryString.page * 1 || 1;
        const perPage = this.queryString.limit * 1 || 100;

        this.query.paginate({ perPage, currentPage });

        return this;
    }

    /**
     * Perform a request to the db with all the knex methods chained
     * @return {object} - The knex sql query built.
     */
    request() {
        return this.query;
    }
}

module.exports = APIFeatures;
