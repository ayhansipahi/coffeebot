'use strict';

var express = require('express');
var controller = require('./shopify.controller.js');


var router = express.Router();

router.post('/', controller.check, controller.identify, controller.action);


module.exports = router;
