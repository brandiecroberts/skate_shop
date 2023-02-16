

const express = require('express');
const router = express.Router();
const conversationsQueries = require('../db/queries/conversations');

///GET

// router.get('/', (req, res) => {
//   conversationsQueries.sendMessage()
//   .then((response) => {
//     const templateVars = {data: response}
//     res.render('conversations', templateVars);
//   });
// });

router.get('/', (req, res) => {
  conversationsQueries.displayConversations2(12)
    .then((response) => {
      const userConversations = {data: response}
      res.render('conversations', userConversations);
    })
});


///POST

router.post('/conversations', (req, res) => {
  res.render('conversations');
});




module.exports = router;
