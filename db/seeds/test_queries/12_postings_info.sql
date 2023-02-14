SELECT title, price, photo_url
FROM postings
JOIN users ON users.id = seller_id
WHERE users.id = $1 --recipient_id
;
