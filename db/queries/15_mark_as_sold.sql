UPDATE postings
SET sold = true
WHERE postings.id = $1 --the one that was clicked
AND seller_id = $2 -- the user that is logged in
AND sold = FALSE
;
