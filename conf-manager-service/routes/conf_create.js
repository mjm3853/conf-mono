var express = require('express');
var router = express.Router();
var db = require('../lib/rethinkdb');
var logger = require('../lib/logger');

/* Create Conference. */
router.post('/conference', function (req, res, next) {
  var conference_details = req.body;
  db.createConference(conference_details, function (err, outcome) {
    if (err) {
      logger.error("[db][createConference] Failed to create conference due to:", err);
      res.status(500).send(err);
    } else if (outcome === false) {
      logger.error("[db][createConference] Failed to create conference due to:", err);
      res.status(500).send(err);
    } else {
      logger.info("[db][createConference] Successfully created conference.");
      res.status(200).send("Conference successfully created.");
    }
  })
});

module.exports = router;
