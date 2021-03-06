const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const passport = require('passport');
const dotenv = require('dotenv').config();

const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const homeRouter = require('./routes/home');

const app = express();
// helpers
const db = require('./helpers/db')();
//middlewares
const isAuthenticated = require('./middleware/isAuthenticated');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components')));

// express-session
app.use(session({
  secret: process.env.SESSION_SECRET_KEY,
  resave: false,
  saveUninitialized: true,
  cookie: {
    //secure: true, // only use ssl connections
    maxAge: 14 * 24 * 3600000 // you can change it.
  }
}));
// passport.js
app.use(passport.initialize());
app.use(passport.session());
// routes
app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/home', isAuthenticated, homeRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
