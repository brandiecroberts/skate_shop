const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/home', (req, res) => {
  res.redirect('/');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', (req, res) => {
  //if user not found {
//res.redirect('/register');
  // }
  res.render('login');
});

module.exports = router;
