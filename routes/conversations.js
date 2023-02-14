const express = require('express');
const router = express.Router();
const conversationsQueries = require('../db/queries/conversations');

router.get('/', (req, res) => {
  sendMessage()
  .then((response) => {
    const templateVars = {data: response}
    res.render('conversations', templateVars);
  });
});

module.exports = router;
