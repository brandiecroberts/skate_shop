SELECT email, password
FROM users
WHERE email = $1 --email of user
;
