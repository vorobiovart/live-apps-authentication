const proxy = require('http-proxy-middleware');

module.exports = app => {
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        next();
    });
};