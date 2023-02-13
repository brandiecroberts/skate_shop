DELETE FROM favourites
WHERE posting_id = $1 --postings.id of whatever was clicked
AND user_id = $2 -- user_id of whoever is logged in
;
