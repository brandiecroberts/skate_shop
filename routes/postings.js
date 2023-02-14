const express = require('express');
const router = express.Router();
const postingsQueries = require('../db/queries/postings');

router.get('/', (req, res) => {
  addPosting()
  .then((response) => {
    const templateVars = {data: response}
    res.render('Posting', templateVars);
  });
});

module.exports = router;
