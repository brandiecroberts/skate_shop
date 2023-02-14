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
  favouritesQueries.fetchFavouritesById()
  .then((response) => {
    const templateVars = {data: response};
    console.log(response);
    res.render('favourites', templateVars);
  });
});


router.post('/', (req, res) => {
  const user_id = req.body.useridfav;
  const posting_id = req.body.postingidfav;

  console.log('useridfav: ', user_id);
  console.log('postingidfav:', posting_id);

  favouritesQueries.addFavourite(user_id, posting_id)
  .then((response) => {
    console.log(response);
    res.redirect('/favourites');
  })
});




module.exports = router;

