'use strict';

var express = require('express');
var controller = require('./sms.controller.js');

var router = express.Router();

router.post('/', controller.check, controller.create);

module.exports = router;
