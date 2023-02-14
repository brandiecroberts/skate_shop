SELECT conversations.*, users.name as name
FROM conversations
JOIN users ON users.id = sender_id
WHERE sender_id = users.id
AND recipient_id = users.id
;
