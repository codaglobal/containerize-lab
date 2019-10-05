var express = require('express');
var router = express.Router();
var config = require('/config/config.json');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: config.title,
    appVersion: config.appVersion,
    message: config.message
  });
});

module.exports = router;
