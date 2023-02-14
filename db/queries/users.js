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




// module.exports = { getUsers, addUser, addFavourite, deleteFavourite, addPosting, deletePosting, sendMessage, receiveMessage, displayConversations, fetchPosting, fetchFavourites};




