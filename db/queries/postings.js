const db = require('../connection');
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

