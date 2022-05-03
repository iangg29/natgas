const db = require('../db/database');
const Base = require('./base.model');
const User = require('./user.model');
const AppError = require('../utils/appError');

/** Class for the NatgasBlocks resource */
class NatgasBlock extends Base {
    static table = 'natgasblock';
    static tableReference = db(this.table);

    constructor({ date, period, email }) {
        super();
        this.date = date;
        this.period = period;
        this.email = email;

        this.tableName = 'natgasblock';
    }

    /**
     * It checks if the user has used all his NGBs, if he has used a NGB in the last month, and if not,
     * it creates a new NGB
     * @returns The new NatgasBlock created.
     */
    async save() {
        const user = (await User.getOne('email', this.email))[0];

        // CHECK IF USER HAS USED ALL NGB
        if (user.ngBlocks < 1)
            throw new AppError('Ya no le quedan mas NGB al usuario.', 400);

        // CHECK IF USER HAS USED A NGB IN THE LAST MONTH
        const thisMonth = await NatgasBlock.getOne(
            'email',
            this.email
        ).whereRaw('MONTH(date) = ?', [new Date(this.date).getMonth() + 1]);

        if (thisMonth.length > 0)
            throw new AppError(
                'Ya no le quedan mas NGB en este mes al usuario.',
                400
            );

        // CREATE NGB
        const idNatgasblock = await db
            .insert({
                date: this.date,
                period: this.period,
                email: this.email,
            })
            .into(this.tableName);

        return db.select('*').from(this.tableName).where({
            idNatgasblock,
        });
    }
}

module.exports = NatgasBlock;
