DELETE FROM postings
JOIN users ON users.id = seller_id
WHERE seller_id = $1 -- id of logged in user
AND postings.id - $2 -- the post that was clicked
;
