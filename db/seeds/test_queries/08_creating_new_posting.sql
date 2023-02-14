INSERT INTO postings (seller_id, title, description, photo_url, price, condition)
VALUES (users.id, $1, $2, $3, $4, $5)
;
