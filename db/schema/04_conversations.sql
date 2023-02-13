DROP TABLE IF EXISTS conversations CASCADE;
CREATE TABLE conversations (
  id SERIAL PRIMARY KEY NOT NULL,
  time TIMESTAMP,
  message_content TEXT,
  posting_id INTEGER REFERENCES postings(id) ON DELETE CASCADE,

  sender_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  recipient_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);
