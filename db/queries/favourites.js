const db = require('../connection');
const { getUsers } = require('./users');

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
    `, [getUsers])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = {addFavourite, deleteFavourite, fetchFavourites};
