const express = require('express');

const Router = express.Router();
const {test} = require('../../controller/test')

Router.post('/test', test);

module.exports = Router;