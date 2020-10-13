const express = require('express');
const router = express.Router();

/* GET login page. */
router.get('/', (req, res, next) => {
  if (!req.user)
    res.render('index', { title: 'Login' });
  else
    res.redirect('/home');
});

module.exports = router;
