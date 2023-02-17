
const express = require('express');
const router = express.Router();
const conversationsQueries = require('../db/queries/conversations');


router.post('/conversations', (req, res) => {
  res.render('conversations');
});




module.exports = router;
