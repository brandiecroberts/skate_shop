const db = require('../connection');

//// USERS

const getUsersByEmail = (givenEmail) => {
  return db.query(`
  SELECT * FROM users WHERE users.email = $1;`, [givenEmail])
    .then(result => {
      // console.log('users by email', result.rows);
      return result.rows[0];
    });
};

const getUsersById = (givenId) => {
  return db.query(`
  SELECT * FROM users WHERE users.id = $1;`, [givenId])
    .then(result => {
      // console.log('users by id', result.rows);
      return result.rows[0];
    });
};

const addUser = (name, email, password) => {
  return db.query(`
  INSERT INTO users (name, email, password)
  VALUES ($1, $2, $3)
  RETURNING *
`, [name, email, password])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};





module.exports = { getUsersByEmail, getUsersById, addUser};





