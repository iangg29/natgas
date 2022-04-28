const cron = require('node-cron');

exports.createBlogDeleteTask = (idBlogPost, date) => {
    // CREATE A DELETE DATE IN THE FUTURE
    const deleteDate = new Date(
        new Date(date).getDate() + 1000 * 60 * 60 * 24 * 30 * 2
    );

    const cronExpr = `${deleteDate.getMinutes()} ${deleteDate.getHours()} ${deleteDate.getDate()} ${deleteDate.getMonth()} ${deleteDate.getDay()}`;

    // SET CRON
    cron.schedule(
        cronExpr,
        async function () {
            await db('blogpost')
                .where({
                    idBlogPost,
                })
                .del();

            console.log('Destroyed Blog: ', idBlogPost);
        },
        false
    );
};
