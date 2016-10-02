'use strict';

var FacebookStrategy = require('passport-facebook').Strategy;

var initPassport = function(passport) {
  passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL || 'http://localhost:3000/auth/callback',
    //scope: ['email', 'user_friends', 'user_birthday', 'user_location']
    //scope: ['email', 'user_friends', 'public_profile']
    scope: ['email']
  }, function(accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function() {
      return done(null, profile);
    });
  }));

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });
};

module.exports = initPassport;

