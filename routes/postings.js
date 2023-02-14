const express = require('express');
const router = express.Router();
const postingsQueries = require('../db/queries/postings');

///GET

router.get('/', (req, res) => {
  postingsQueries.addPosting()
  .then((response) => {
    const templateVars = {data: response}
    res.render('mypostings', templateVars);
  });
});

router.get('/new', (req, res) => {
  res.render('newposting');
});

router.get('/mypostings', (req, res) => {
  res.render('mypostings');
});


///POST
router.post('/mypostings', (req, res) => {
  res.render('mypostings');
});

router.post('/mypostings/:id/delete', (req, res) => {
  res.render('mypostings/delete');
});

router.post('/new', (req, res) => {
  const seller_id = req.body.sellerid;
  const title = req.body.title;
  const description = req.body.desc;
  const photo_url = req.body.photourl;
  const price = req.body.price;
  const condition = req.body.condition;

  postingsQueries.addPosting(seller_id, title, description, photo_url, price, condition)
  .then((response) => {
    console.log(response);
    res.redirect('/postings/new');
  })
});

module.exports = router;
