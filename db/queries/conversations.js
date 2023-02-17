const e = require('express');
const db = require('../connection');

//// CONVERSATIONS

const sendMessage = (data) => {
  return db.query(`
      INSERT INTO conversations (time, message_content, posting_id, sender_id, recipient_id)
      VALUES ($1, $2, $3, $4, $5)`, [])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const receiveMessage = (data) => {
  return db.query(`
      SELECT conversations.*, users.*, postings.*
      FROM conversations
      JOIN users ON conversations.sender_id = users.id
      JOIN postings ON users.id = postings.seller_id
      WHERE conversations.sender_id = $1
      AND conversations.posting_id = $2;
      `, [data.conversations.sender_id, data.conversations.posting_id])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const displayConversations = (data) => {
  return db.query(`
      SELECT conversations.*, users.*, postings.*
      FROM conversations
      JOIN users ON conversations.sender_id = users.id
      JOIN postings ON users.id = postings.seller_id
      WHERE conversations.sender_id = $1
      `, [data])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const displayConversations2 = (data) => {
  return db.query(`
    SELECT time, message_content, title
    FROM conversations c
    JOIN postings p
    ON posting_id = p.id
    WHERE sender_id = $1
    ORDER BY c.time;
    `, [data])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { sendMessage, receiveMessage, displayConversations, displayConversations2 };
