SELECT name
FROM users
WHERE users.email = $1 --email of the user
;
