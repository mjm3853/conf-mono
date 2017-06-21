var express = require('express');
var router = express.Router();
var db = require('../lib/rethinkdb');
var logger = require('../lib/logger');

/* Creat Conference. */
router.post('/conference', function (req, res, next) {
  var conference_details = {
    name: "Mock Auto Created",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    location: "Boston, MA",
    tags: [
      "angular",
      "babel"
    ],
    url: "https://en.wikipedia.org/wiki/Conference",
    date: "June 25, 2017"
  }
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
