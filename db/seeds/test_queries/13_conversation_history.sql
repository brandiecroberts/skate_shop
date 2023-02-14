SELECT postings.title, postings.photo_url, users.name, conversations.time, sold
FROM postings
JOIN users ON users.id = seller_id
JOIN conversations ON posting_id = postings.id
WHERE sender.id = $1 --the logged in user
ORDER BY time
;
