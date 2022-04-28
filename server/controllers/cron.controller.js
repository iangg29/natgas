const cron = require('node-cron');
const Blog = require('../models/blog.model');
const User = require('../models/user.model');

exports.createBlogDeleteTask = (idBlogPost, date) => {
    // CREATE A DELETE DATE IN THE FUTURE
    const deleteDate = new Date(
        new Date(date).getDate() + 1000 * 60 * 60 * 24 * 30 * 2
    );

    // const cronExpr = `${deleteDate.getMinutes()} ${deleteDate.getHours()} ${deleteDate.getDate()} ${deleteDate.getMonth()} ${deleteDate.getDay()}`;
    const cronExpr = `10 * * * * *`;

    // SET CRON
    cron.schedule(
        cronExpr,
        async function () {
            await Blog.deleteOne('idBlogPost', idBlogPost);

            console.log('Destroyed Blog: ', idBlogPost);
        },
        false
    );
};

exports.createUserNGBUpdateTask = () => {
    const cronExpr = '0 0 1 1 *';

    cron.schedule(cronExpr, async function () {
        User.updateAll({ ngBlocks: 5 });
        console.log('All users NGB requests avalilable set to 5');
    });
};
