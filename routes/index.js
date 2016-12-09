/**
 * Created by Stay on 2016/12/9.
 */
module.exports = function (app) {
    app.get('/', function (req, res) {
        res.redirect('/posts');
    });
    app.use('/signup', require('./signup'));
    app.use('/signin', require('./signin'));
    app.use('/signout', require('./signout'));
    app.use('/posts', require('./posts'));
    // 404 page
    app.use(function (req, res) {
        if (!res.headersSent) {
            res.render('404');
        }
    });
};