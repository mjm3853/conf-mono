var express = require('express');
var router = express.Router();

let mockConferences = [
  {
    name: "Test Conf",
    description: "Description",
    tags: [
      "a",
      "b"
    ],
    imgLink: "../../public/image/erlichConf.png",
    date: "June 15, 2017"
  },
    {
    name: "Second Conf",
    description: "Description",
    tags: [
      "a",
      "b"
    ],
    imgLink: "../../public/image/erlichConf.png",
    date: "June 16, 2017"
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(mockConferences);
});

module.exports = router;
