const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
// model
const User = require('../models/User');

passport.use(
  new GoogleStrategy({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL
    }, ((accessToken, refreshToken, profile, done) => {
      const data = profile._json;
      //console.log(data);
      User.findOrCreate({
        'googleId': data.id
      }, {
        name : data.name,
        profilePhotoUrl: data.picture,
      }, (err, user) => {
        return done(err, user);
      });
    })
  ));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

module.exports = passport;
