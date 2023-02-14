const express = require('express');
const router = express.Router();
const favouritesQueries = require('../db/queries/favourites');

// router.get('/favourites', (req, res) => {
//   fetchFavourites()
//   .then((response) => {
//     const templateVars = {data: response}
//     res.render('favourites', templateVars);
//   });
// });

router.post('/favourites', (req, res) => {
});

router.get('/', (req, res) => {
  favouritesQueries.fetchFavourites()
    .then((response) => {
      const templateVars = {data: response};
      res.render('favourites', templateVars);
    });
});

module.exports = router;
