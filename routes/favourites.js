const express = require('express');
const router = express.Router();

const { addFavourite, deleteFavourite, fetchFavouritesById } = require('../db/queries/favourites');

//Load favourites page
router.get('/', (req, res) => {

  const userId = req.session.userId;
  console.log('userId: ', userId);

  fetchFavouritesById(userId)
    .then((result) => {
      const templateVars = {data: result};
      console.log(templateVars);
      res.render('favourites', templateVars);
    });
});

//Delete favourite from Favourites
router.delete('/:id', (req, res) => {
  const userId = req.session.userId;
  console.log('userId: ', userId);
  const postingId = req.body.posting_id;
  console.log('postingId:', postingId);

  deleteFavourite(userId, postingId)
    .then(() => {
      return res.render('favourites');
    });
});




module.exports = router;

