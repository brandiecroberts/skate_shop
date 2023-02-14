DELETE FROM favourites
WHERE posting_id = $1
AND user_id = $2
;
