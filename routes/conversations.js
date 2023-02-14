const express = require('express');
const router = express.Router();
const conversationsQueries = require('../db/queries/conversations');

///GET

router.get('/', (req, res) => {
  conversationsQueries.sendMessage()
  .then((response) => {
    const templateVars = {data: response}
    res.render('conversations', templateVars);
  });
});

router.get('/conversations', (req, res) => {
  res.render('conversations');
});


///POST

router.post('/conversations', (req, res) => {
  res.render('conversations');
});




module.exports = router;
