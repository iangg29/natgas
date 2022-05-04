const db = require('../db/database');
const cron = require('node-cron');
const User = require('../models/user.model');
const VacationsRange = require('../models/rangovacaciones.model');

/**
 * It takes a date in the format of "YYYY-MM-DD" and returns the number of years between that date and
 * the current date.
 * @param date - The date you want to calculate the antiquity of.
 * @returns The age of the person in years.
 */
const calcAntiquity = (date) => {
    const dt1 = new Date();
    const dt2 = new Date(date);
    let diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60 * 60 * 24;
    return Math.abs(Math.round(diff / 365.25));
};
/**
 * This function will update all users' NGB requests available to 5.
 */
const updateNGB = async () => {
    await User.updateAll({ ngBlocks: 5 });
    console.log('All users NGB requests avalilable set to 5');
};
/**
 * It updates the vacations of the employees that have their contract anniversary today.
 * </code>
 */
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

/* Creating a cron job that will run every year on the 1st of January at 6:00 AM. */
exports.createUserNGBUpdateTask = () => {
    const cronExpr = '0 6 1 1 *';
    cron.schedule(cronExpr, updateNGB);

    console.log('Update users NGB task created');
};

/* Creating a cron job that will run every day at 6:00 AM. */
exports.createUpdateEmployeeVacationsTask = () => {
    const cronExpr = '0 6 * * *';
    cron.schedule(cronExpr, updateEmployeeVacations);
    console.log('Update users Vacations task created');
};
