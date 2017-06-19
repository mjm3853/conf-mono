var express = require('express');
var router = express.Router();

let mockConferences = [
  {
    name: "Test Conf",
    description: "Description",
    tags: [
      "angular",
      "babel"
    ],
    imgLink: "../../public/image/erlichConf.png",
    date: "June 15, 2017"
  },
  {
    name: "Second Conf",
    description: "Description",
    tags: [
      "babel"
    ],
    imgLink: "../../public/image/erlichConf.png",
    date: "June 16, 2017"
  },
  {
    name: "Third Conf",
    description: "This conference is about stuff",
    tags: [
      "angular",
      "react"
    ],
    imgLink: "../../public/image/erlichConf.png",
    date: "June 17, 2017"
  }

]

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send(mockConferences);
});

module.exports = router;
