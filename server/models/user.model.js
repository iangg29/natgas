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

    /**
     * It takes the password and passwordConfirm and checks if they match, if they do, it encrypts the
     * password and inserts it into the database.
     * @returns The user that was just created.
     */
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

    /**
     * "This function takes a candidate password and a user password, and returns a promise that
     * resolves to true if the candidate password is the same as the user password, and false
     * otherwise."
     *
     * The function is asynchronous because it uses the bcrypt.compare() function, which is
     * asynchronous.
     *
     * The function is declared as static because it is a method of the User class, and it is called on
     * the User class, not on an instance of the User class.
     *
     * The function is declared as async because it uses the await keyword.
     *
     * The function returns a promise that resolves to true if the candidate password is the same as
     * the user password, and false otherwise.
     *
     * The function uses the bcrypt.compare() function to compare the candidate password with the user
     * password.
     *
     * The bcrypt.compare() function takes two arguments: the candidate password and the user password.
     * @param candidatePassword - The password that the user is trying to log in with.
     * @param userPassword - The password that is stored in the database
     * @returns The result of the comparison.
     */
    static async correctPassword(candidatePassword, userPassword) {
        return await bcrypt.compare(candidatePassword, userPassword);
    }
};
