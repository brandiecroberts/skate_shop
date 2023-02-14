const db = require('../connection');

const addPosting = (seller_id, title, description, photo_url, price, condition) => {
    return db.query(`
  INSERT INTO postings (seller_id, title, description, photo_url, price, condition)
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING *
  `, [seller_id, title, description, photo_url, price, condition])
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

module.exports = { addPosting, deletePosting, fetchPosting };
