const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://quiet-forest-60957.herokuapp.com',
            changeOrigin: true,
        })
    );
};