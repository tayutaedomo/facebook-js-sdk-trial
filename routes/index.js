var express = require('express');
var router = express.Router();

var title = 'Facebook Javascript SDK Trial';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: title });
});

router.get('/like', function(req, res, next) {
  res.render('like', { title : 'Like | ' + title });
});


module.exports = router;

