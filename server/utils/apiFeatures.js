const db = require('../db/database');

class APIFeatures {
    constructor(table, queryString) {
        (this.table = table), (this.queryString = queryString);
        this.query = db.table(table);
    }

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

    filter() {
        const queryObj = { ...this.queryString };
        const excludeFields = ['page', 'sort', 'limit', 'fields'];

        // remove fields not relevant for this process
        excludeFields.forEach((el) => delete queryObj[el]);
        // remove search fields
        Object.keys(queryObj).forEach((el) =>
            el.endsWith('like') ? delete queryObj[el] : true
        );

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
