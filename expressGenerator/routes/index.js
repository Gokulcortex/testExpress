var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("comming gv")
  res.render('index', { title: 'Express Gv apllication' });
});

module.exports = router;
