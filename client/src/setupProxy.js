const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        // 'https://quiet-forest-60957.herokuapp.com/api',
        createProxyMiddleware({
            target: 'http://localhost:5000/',
            // target: 'https://quiet-forest-60957.herokuapp.com',
            changeOrigin: true,
        })
    );
    
};