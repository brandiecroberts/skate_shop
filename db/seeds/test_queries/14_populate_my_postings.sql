SELECT *
FROM postings
JOIN users ON users.id = seller_id
WHERE users.id = $1 -- id of user who is logged in
