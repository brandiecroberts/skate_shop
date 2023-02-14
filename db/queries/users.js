const db = require('../connection');

//// USERS

const getUser = (email) => {
  return db.query('SELECT * FROM users WHERE email = $1', [email])
    .then(data => {
      return data.rows[0];
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




module.exports = { getUser, addUser};




