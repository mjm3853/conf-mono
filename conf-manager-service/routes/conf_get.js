var express = require('express');
var router = express.Router();
var db = require('../lib/rethinkdb');
var logger = require('../lib/logger');

/* GET home page. */
router.get('/conferences', function (req, res, next) {
  var max_count = 5;
  if (req.query.count) {
    max_count = req.query.count
  }
  db.getConferences(max_count, function (err, results) {
    if (err) {
      logger.error("[db][getConferences] Failed to retrieve conferences:", err);
      res.status(500).send(err);
    } else {
      logger.info("[db][getConferences] Successfully retrieved conferences from db.");
      res.send(results);
    }
  })
});

module.exports = router;
