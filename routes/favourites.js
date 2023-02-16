const express = require('express');
const router = express.Router();

const { addFavourite, deleteFavourite, fetchFavouritesById } = require('../db/queries/favourites');

//Load favourites page
router.get('/', (req, res) => {

  const userId = req.session.userId;
  const email = req.session.email;


  fetchFavouritesById(userId)
    .then((result) => {
      const templateVars = {data: result, userId, email};
      res.render('favourites', templateVars);
    });
});

//Delete favourite from Favourites
router.delete('/:id/delete', (req, res) => {
  const userId = req.session.userId;
  console.log('userId: ', userId);
  const postingId = req.params.id;
  console.log('postingId:', postingId);

  deleteFavourite(userId, postingId)
    .then(() => {
      return res.redirect('/favourites');
    });
});




module.exports = router;

