const express = require('express');
const router = express.Router();
const { getUser, addUser } = require('../db/queries/users');
const bcrypt = require('bcryptjs');

///GET

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

router.get('/register', (req, res) => {
  res.render('register');
});

///POST

router.post('/register', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  // Check for empty fields
  if (email === '' || password === '' || name === '') {
    return res.status(400).send("Please provide a name, email, and password.");
  }
  // Check if account/email already exists
  // if (getUser(email)) {
  //   console.log("getUser(email): ", getUser(email));
  //   return res.status(400).send("Email already exists.");
  // }
  // If all checks pass, then add user to database
  addUser(name, email, bcrypt.hashSync(password, 10))
    .then((response) => {
      console.log(response);
      res.redirect('/');
    });

  const id = Math.random().toString(36).substring(2, 6);
  const newID = {email, id};
  console.log('newid:', newID);
  addUser[id] = newID;

  res.cookie('userID', newID);
  req.session.userId = newID;
});

router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log('email: ', email);
  console.log('password', password);

  // User lookup function:


  getUser(email)
    .then((response) => {
    // Check if password matches
      if ((password === response.password)) {
        console.log('password matches!!!');
        res.redirect("/");
      } else {
        console.log('password doesnt match!!'); // DOESN'T REDIRECT TO REGISTER
        res.redirect("/register");
      }
    });
});

router.post("/logout", (req, res) => {
  // res.clearCookie("userID");
  // req.session = null;
  // res.redirect("/login");
  res.render('logout');
});




module.exports = router;
