const db = require('../connection');

//// USERS

const getUsers = () => {
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
};

const addUser = (newUserData) => {
  return db.query(`
  INSERT INTO users (name, email, password)
  VALUES ($1, $2, $3)
  RETURNING *
`, [newUserData.name, newUserData.email, newUserData.password])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

//// FAVOURITES

const addFavourite = (data) => {
  return db.query(`
    INSERT INTO favourites (user_id, posting_id)
    VALUES ($1, $2)
    RETURNING *`, [data.user_id, data.posting_id])
    .then((result) => {
      console.log(result.rows);
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const deleteFavourite = (data) => {
  return db.query(`
    DELETE FROM favourites
    WHERE seller_id = $1
    AND postings.id - $2
  `, [data.seller_id, data.id])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const fetchFavourites = (data) => {
  return db.query(`
  SELECT favourites.*, postings.*
  FROM favourites
  JOIN postings ON postings.id = posting_id
  WHERE user_id = $1
  `, [data.seller_id])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

//// POSTINGS

const addPosting = (postInfo) => {
  return db.query(`
INSERT INTO postings (seller_id, title, description, photo_url, price, condition)
VALUES (users.id, $1, $2, $3, $4, $5)
RETURNING *
`, [postInfo.users.id, postInfo.title, postInfo.description, postInfo.photo_url, postInfo.price, postInfo.condition])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const deletePosting = (posting) => {
  return db.query(`
    DELETE FROM postings
    WHERE seller_id = $1
    AND postings.id - $2
  `, [posting.seller_id, posting.id])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const fetchPosting = (posting) => {
  return db.query(`
  SELECT *
  FROM postings
  WHERE seller_id = $1
  `, [posting.seller_id])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

//// CONVERSATIONS

const sendMessage = (data) => {
  return db.query(`
    INSERT INTO conversations (time, message_content, posting_id, sender_id, recipient_id)
    VALUES ($1, $2, $3, $4, $5)`, [])
    .then((result) => {
      console.log(result.rows);
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
      console.log(result.rows);
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
    `, [data.conversations.sender_id, data.conversations.posting_id])
    .then((result) => {
      console.log(result.rows);
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};



module.exports = { getUsers, addUser, addFavourite, deleteFavourite, addPosting, deletePosting, sendMessage, receiveMessage, displayConversations, fetchPosting, fetchFavourites};




