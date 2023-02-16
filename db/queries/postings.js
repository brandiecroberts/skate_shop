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

const fetchPosting = (seller_id) => {
  return db.query(`
    SELECT *
    FROM postings
    WHERE seller_id = $1
    `, [seller_id])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const fetchAllPostings = () => {
  return db.query(`
    SELECT *
    FROM postings
    LIMIT 25
    `)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
}

const markAsSold = (posting_id) => {
  return db.query(`
    UPDATE postings
    SET sold = true
    WHERE posting_id = $1
  `, [posting_id])
};

module.exports = { addPosting, deletePosting, fetchPosting, fetchAllPostings, markAsSold };
