const express = require('express')
const apiRouter = require('./router/api/test');

console.log('test');
const app = express();

app.use('/api', apiRouter);

module.exports = app;