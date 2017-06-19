var express = require('express');
var router = express.Router();
var logger = require('../lib/logger.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'conf.api' });
});

module.exports = router;
