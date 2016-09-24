var express = require('express');
var router = express.Router();
var passport = require('passport');
var crypto = require('crypto');
var authorized = require('../middleware/auth');

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

// Refer: http://christina04.hatenablog.com/entry/2015/11/07/225734
router.get('/auth', function(req, res, next) {
  if (!req.session.state) {
    var current_date = (new Date()).valueOf().toString();
    var random = Math.random().toString();
    var hash = crypto.createHash('sha1').update(current_date + random).digest('hex');

    req.session.state = hash
  }

  passport.authenticate('facebook', {
    state: req.session.state
  })(req, res, next);
});

router.get('/auth/callback', function(req, res, next) {
  if (!req.session.state) {
    return res.status(400).send({err: 'no state parameter'});
  }

  // CSRF verification
  if (req.query.state !== req.session.state) {
    return res.status(400).send({err: 'invalid state parameter'});
  }

  passport.authenticate('facebook', {
    failureRedirect: '/auth',
    successRedirect: '/me'
  })(req, res, next);
});

router.get('/me', authorized, function(req, res, next) {
  console.log(req.user);

  res.render('me', { title: 'OAuth', profile: req.user });
});


module.exports = router;

