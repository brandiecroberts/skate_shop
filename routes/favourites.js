const express = require('express');
const router = express.Router();
const favouritesQueries = require('../db/queries/favourites');

router.get('/', (req, res) => {
  fetchFavourites()
  .then((response) => {
    const templateVars = {data: response}
    res.render('favourites', templateVars);
  });
});

module.exports = router;
