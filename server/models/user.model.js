const db = require('../db/database');
const Base = require('./base.model');
const bcrypt = require('bcryptjs');
const AppError = require('../utils/appError');

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
                'Ambas contraseñas deben coincidir, intenta de nuevo.',
                400
            );
        if (this.password.split('').length < 8)
            throw new AppError(
                'Las contraseñas debe de contener al menos 8 caracteres.',
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
};
