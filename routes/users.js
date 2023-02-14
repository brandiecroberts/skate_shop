/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

// const bcrypt = require('bcrypt');

// const cookieSession = require('cookie-session');

// router.use(cookieSession(({
//   name: 'session',
//   keys: ['abcdefghijklmnop']
// }))
// );


/////////GETS

router.get('/', (req, res) => {
  res.render('users');
});



router.get('/register', (req, res) => {
  res.render('register');
});






//POSTS

router.post('/register', (req, res) => {
  res.render('register');
});




module.exports = router;
