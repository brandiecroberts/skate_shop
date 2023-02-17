const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { getUsersByEmail, addUser } = require('../db/queries/users');
const { addFavourite, fetchFavouritesById } = require('../db/queries/favourites');
const { fetchAllPostings } = require('../db/queries/postings');


// ---------- GET

router.get('/', (req, res) => {
  const userId = req.session.userId;
  const email = req.session.email;

  const postingsPromise = fetchAllPostings();
  const favouritesPromise = fetchFavouritesById(userId);

  Promise.all([postingsPromise, favouritesPromise])
    .then((results) => {
      console.log(results);
      const postings = results[0];
      const favourites = results[1];
      console.log('favs', favourites);

      const mapFavourites = favourites.map((favourite) => {
        return favourite.posting_id;
      });
      console.log(mapFavourites);

      const templateVars = {data: postings, mapFavourites, userId, email};
      res.render('home', templateVars);
    });


});

router.get('/login', (req, res) => {
  const userId = req.session.userId;
  const email = req.session.email;

  const templateVars = {data: userId, email};

  res.render('login', templateVars);
});


router.get('/register', (req, res) => {
  res.render('register');
});

// ---------- POST

// REGISTER
router.post('/register', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const hashedPassword = bcrypt.hashSync(password, 10);

  // Check for empty fields
  if (!email || !password || !name) {
    return res.render('')
    return res.status(400).send("Please provide a name, email, and password.");
  }

  // Check if account/email already exists
  getUsersByEmail(email)
    .then((response) => {
      if (response) {
      // If email already exists, return error
        console.log("Login that already exists: ", response);
        return res.status(400).send("Email already exists.");
      }
      // If email doesn't exist, add new user to 'users' table
      addUser(name, email, hashedPassword)
        .then((response) => {
          // Create cookie session
          const userId = response.id;
          req.session.userId = userId;
          // Redirect to home page after adding user
          res.redirect('/');
        });
    });
});

// LOGIN
router.post('/login', (req, res) => {

  // User lookup function:
  const email = req.body.email;
  const password = req.body.password;

  getUsersByEmail(email)
    .then((response) => {

      // Check if user is registered
      if (!response) {
        return res.status(400).send("You do not have an account yet. Please register");
      }

      // Check if password matches
      const passwordMatch = bcrypt.compareSync(password, response.password);

      if (!passwordMatch) {
        console.log('password doesnt match!!'); // DOESN'T REDIRECT TO REGISTER
        return res.status(400).send("password doesnt match!");
      }
      console.log('password matches!!!');
      const userId = response.id;
      req.session.userId = userId;
      res.redirect("/");
    });
});

// LOGOUT
router.post("/logout", (req, res) => {
  req.session = null;
  res.redirect("/login");
});

// ADD FAVOURITE
router.post('/:id/', (req, res) => {
  const userId = req.session.userId;
  const postingId = req.body.posting_id;

  addFavourite(userId, postingId)
    .then((response) => {
      console.log(response);
      res.render('home');
    });
});



module.exports = router;
