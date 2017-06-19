var express = require('express');
var router = express.Router();
var db = require('../lib/rethinkdb');

/* GET home page. */
router.get('/', function (req, res, next) {
  db.getConferences(5, function (err, results) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(results);
    }
  })
});

module.exports = router;
