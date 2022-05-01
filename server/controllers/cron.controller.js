const db = require('../db/database');
const cron = require('node-cron');

const updateNGB = async () => {
    await db('perfil').update({ ngBlocks: 5 });
    console.log('All users NGB requests avalilable set to 5');
};

exports.createUserNGBUpdateTask = () => {
    const cronExpr = '0 0 1 1 *';
    cron.schedule(cronExpr, updateNGB);

    console.log('Update users task created');
};
