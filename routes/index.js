var express = require('express');
var router = express.Router();

var title = 'Facebook Javascript SDK Trial';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: title });
});

router.get('/like_jssdk', function(req, res, next) {
  res.render('like_jssdk', { title : 'Like jssdk | ' + title });
});

router.get('/like_iframe', function(req, res, next) {
  res.render('like_iframe', { title : 'Like iframe | ' + title });
});


module.exports = router;

