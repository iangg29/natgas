const db = require('../db/database');

class APIFeatures {
    constructor(table, queryString) {
        (this.table = table), (this.queryString = queryString);
        this.query = db.table(table);
    }

    filter() {
        const queryObj = { ...this.queryString };
        const excludeFields = ['page', 'sort', 'limit', 'fields'];

        // remove fields not relevant for this process
        excludeFields.forEach((el) => delete queryObj[el]);

        // Filtering
        this.query.where(queryObj);

        // para poderlo encadenar
        return this;
    }

    sort() {
        if (this.queryString.sort) {
            const sortBy = this.queryString.sort.split(',');
            sortBy.forEach((sort) => {
                if (sort.includes('-'))
                    this.query.orderBy(sort.split('-')[0], 'desc');
                else this.query.orderBy(sort, 'asc');
            });
        }

        return this;
    }

    limitFields() {
        if (this.queryString.fields) {
            const fields = this.queryString.fields.split(',');
            this.query.select(fields);
        }

        return this;
    }

    paginate() {
        const currentPage = this.queryString.page * 1 || 1;
        const perPage = this.queryString.limit * 1 || 100;

        this.query.paginate({ perPage, currentPage });

        return this;
    }

    async request() {
        return await this.query;
    }
}

module.exports = APIFeatures;
