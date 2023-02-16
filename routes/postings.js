/* eslint-disable camelcase */
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
  const userId = req.session.userId;
  const email = req.session.email;
  const templateVars = {userId, email}

  res.render('newposting', templateVars);
});

router.get('/mypostings', (req, res) => {
  const userId = req.session.userId;
  const email = req.session.email;

  fetchPosting(userId)
    .then((response) => {
      console.log(response);
      const templateVars = {data: response, userId, email};
      res.render('mypostings', templateVars);
    });
});
/////-----------POST

router.post('/mypostings', (req, res) => {
  const userId = req.session.userId;
  const email = req.session.email;
  const templateVars = {data: response, userId, email};
  res.render('mypostings', templateVars);
});

router.post('/:id/delete', (req, res) => {
  const postingId = req.params.id;
  const userId = req.session.userId;
  console.log('postingId', postingId);

  deletePosting(userId, postingId)
  .then((response) => {
    res.redirect('/postings/mypostings')
  });
});

router.post('/:id/sold', (req, res) => {
  // const postingId = ???;

  deletePosting(postingId)
    .then(() => {
      res.render('mypostings');
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

  const userId = req.session.userId;
  const email = req.session.email;


  const userId = req.session.userId;
  const email = req.session.email;


  addPosting(sellerId, title, description, photoUrl, price, condition)
    .then((response) => {
      const templateVars = {data: response, userId, email};
      res.render('mypostings', templateVars);
    });
});

//Mark as sold
router.post('/sold', (req, res) => {
  const posting_id = '';
  const userId = req.session.userId;
  const email = req.session.email;

  markAsSold(posting_id)
  .then((response) => {
    const templateVars = {data: response, userId, email};
    res.render('mypostings', templateVars);
  })
});


module.exports = router;
