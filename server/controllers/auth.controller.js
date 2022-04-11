const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const db = require('../db/database');
const User = require('./../models/user.model');

const updatePswd = async () => {
    const users = await User.getAll({});
    users.forEach(async (user) => {
        console.log(user.email);
        const psw = await bcrypt.hash('Password123', 12);
        await User.updateOne('email', user.email, {
            password: psw,
        });
        console.log(user.email, ' READY');
    });
};
