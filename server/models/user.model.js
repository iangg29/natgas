const db = require('../db/database');
const Base = require('./base.model');
const bcrypt = require('bcryptjs');
const AppError = require('../utils/appError');
const cron = require('node-cron');

module.exports = class User extends Base {
    static table = 'perfil';

    constructor({ name, lastname, email, password, passwordConfirm }) {
        super();
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.passwordConfirm = passwordConfirm;
        this.tableName = 'perfil';
    }

    async save() {
        if (this.password !== this.passwordConfirm)
            throw new AppError(
                'Password confirm and password do not match',
                400
            );
        if (this.password.split('').length < 8)
            throw new AppError(
                'Password must be at least 8 characters long',
                400
            );
        const encrypted = await bcrypt.hash(this.password, 12);
        const number = await db
            .insert({
                name: this.name,
                lastname: this.lastname,
                email: this.email,
                password: encrypted,
            })
            .into(this.tableName);
        return db.select('*').from(this.tableName).where({
            number,
        });
    }

    static async correctPassword(candidatePassword, userPassword) {
        return await bcrypt.compare(candidatePassword, userPassword);
    }

    static createUserNGBUpdateTask() {
        const cronExpr = '1 * * * * *';
        // const cronExpr = '0 0 1 1 *';

        cron.schedule(cronExpr, async function () {
            await db(this.table).update({ ngBlocks: 5 }).where();
            console.log('All users NGB requests avalilable set to 5');
        });
    }
};
