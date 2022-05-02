const db = require('../db/database');
const cron = require('node-cron');
const User = require('../models/user.model');
const VacationsRange = require('../models/rangovacaciones.model');

const calcAntiquity = (date) => {
    const dt1 = new Date();
    const dt2 = new Date(date);
    let diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60 * 60 * 24;
    return Math.abs(Math.round(diff / 365.25));
};
const updateNGB = async () => {
    await User.updateAll({ ngBlocks: 5 });
    console.log('All users NGB requests avalilable set to 5');
};
const updateEmployeeVacations = async () => {
    const usersToUpdate = await db('perfil').whereRaw(
        `MONTH(contractdate) = MONTH(CURRENT_DATE()) AND DAY(contractdate) = DAY(CURRENT_DATE())`
    );

    await Promise.all(
        usersToUpdate.map(async (user) => {
            const antiquity = calcAntiquity(user.contractdate);
            const vacationsToAdd =
                (await VacationsRange.calcVacDays(antiquity))[0].days +
                user.vacations;
            await User.updateOne('email', user.email, {
                vacations: vacationsToAdd,
            });
            console.log(`${user.email} vacations updated to ${vacationsToAdd}`);
        })
    );
    console.log('Users with contract renovations updated successfully');
};

exports.createUserNGBUpdateTask = () => {
    const cronExpr = '0 6 1 1 *';
    cron.schedule(cronExpr, updateNGB);

    console.log('Update users NGB task created');
};

exports.createUpdateEmployeeVacationsTask = () => {
    const cronExpr = '0 6 * * *';
    cron.schedule(cronExpr, updateEmployeeVacations);
    console.log('Update users Vacations task created');
};
