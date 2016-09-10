var express = require('express');
var router = express.Router();

var title = 'Facebook Javascript SDK Trial';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: title });
});

router.get('/hello', function(req, res, next) {
  //res.render('hello', { title : 'Hello | ' + title });
  res.send('hello');
});


module.exports = router;

