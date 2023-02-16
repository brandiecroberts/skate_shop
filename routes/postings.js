const express = require('express');
const router = express.Router();
const { addPosting, deletePosting, fetchPosting, fetchAllPostings, markAsSold } = require('../db/queries/postings');

//-----------GET

router.get('/', (req, res) => {
  const userId = req.session.userId;
  const email = req.session.email;
  fetchPosting(userId)
    .then((response) => {
      const templateVars = {data: response, userId, email};
      res.render('mypostings', templateVars);
    });
});

router.get('/new', (req, res) => {
  res.render('newposting');
});

router.get('/mypostings', (req, res) => {
  const userId = req.session.userId;
  const email = req.session.email;

  fetchPosting(userId)
    .then((response) => {
      console.log(response);
      const templateVars = {data: response, userId, email}
      res.render('mypostings', templateVars);
    });
});


/////-----------POST

router.post('/mypostings', (req, res) => {
  res.render('mypostings');
});

router.post('/:id/delete', (req, res) => {
 // const postingId = ???;

  deletePosting(postingId)
  .then((response) => {
    res.render('mypostings')
  });
  res.render('/');
});

router.post('/:id/sold', (req, res) => {
  // const postingId = ???;

   deletePosting(postingId)
   .then((response) => {
     res.render('mypostings')
   });
   res.render('/');
 });

// Create a new posting
router.post('/new', (req, res) => {
  console.log('req.body', req.body);
  const sellerId = req.session.userId;
  const title = req.body.title;
  const description = req.body.desc;
  const photoUrl = req.body.photourl;
  const price = req.body.price;
  const condition = req.body.condition;

  addPosting(sellerId, title, description, photoUrl, price, condition)
    .then((response) => {
      res.render('mypostings');
    });
});

module.exports = router;
