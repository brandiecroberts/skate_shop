const express = require('express');
const router = express.Router();
const postingsQueries = require('../db/queries/postings');

router.get('/', (req, res) => {
  postingsQueries.addPosting()
    .then((response) => {
      const templateVars = {data: response};
      res.render('mypostings', templateVars);
    });
});

router.get('/newposting', (req, res) => {
  res.render('newposting');
});

router.get('/mypostings', (req, res) => {
  res.render('mypostings');
});

router.post('/mypostings', (req, res) => {
  res.render('mypostings');
});

router.post('/mypostings/:id/delete', (req, res) => {
  res.render('mypostings/delete');
});

router.post('/newposting', (req, res) => {
  res.render('newposting');
});
module.exports = router;
