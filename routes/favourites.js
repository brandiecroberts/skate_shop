const express = require('express');
const router = express.Router();

const { addFavourite, deleteFavourite, fetchFavouritesById } = require('../db/queries/favourites');

//Load favourites page
router.get('/', (req, res) => {

  const userId = req.session.userId;
  const email = req.session.email;
  console.log('userId: ', userId);

  fetchFavouritesById(userId)
    .then((result) => {
      const templateVars = {data: result, userId, email};
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

router.post('/:id', (req, res) => {
  const userId = req.session.userId;
  const itemId = req.params.id;

  addFavourite(userId, itemId)
    .then(() => {
      return res.send("It posted!");
    });
});





module.exports = router;

