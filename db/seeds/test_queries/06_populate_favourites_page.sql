SELECT favourites.*, postings.*
FROM favourites
JOIN postings ON postings.id = posting_id
WHERE user_id = $1
;
