const db = require('../connection');
const { getUsers } = require('./users');

//// FAVOURITES

const addFavourite = (user_id, posting_id) => {
    return db.query(`
      INSERT INTO favourites (user_id, posting_id)
      VALUES ($1, $2)
      RETURNING *`, [user_id, posting_id])
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

  const fetchFavouritesById = (data) => {
    console.log(data);
    return db.query(`
    SELECT favourites.*, postings.*
    FROM favourites
    JOIN postings ON postings.id = posting_id
    WHERE user_id = $1
    `, [1])
      .then((result) => {
        return result.rows[0];
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  module.exports = { addFavourite, deleteFavourite, fetchFavouritesById };
