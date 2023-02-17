const db = require('../connection');

//// FAVOURITES

const addFavourite = (user_id, posting_id) => {
  return db.query(`
      INSERT INTO favourites (user_id, posting_id)
      VALUES ($1, $2)
      RETURNING *`, [user_id, posting_id])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const deleteFavourite = (seller_id, posting_id) => {
  return db.query(`
      DELETE FROM favourites
      JOIN postings ON postings.id = posting_id
      WHERE seller_id = $1
      AND postings.id = $2
    `, [seller_id, posting_id])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const fetchFavouritesById = (data) => {
  console.log(data);
  return db.query(`
    SELECT *
    FROM users
    JOIN postings ON users.id = postings.seller_id
    JOIN favourites ON postings.id = favourites.posting_id
    WHERE user_id = $1
    `, [data])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { addFavourite, deleteFavourite, fetchFavouritesById };
