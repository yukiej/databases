CREATE DATABASE chat;

USE chat;

-- CREATE TABLE rooms (
--   roomname TEXT PRIMARY KEY
-- );

CREATE TABLE users (
  id VARCHAR(14) PRIMARY KEY
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  message TEXT,
  rooms TEXT, 
  id_users VARCHAR(14)
  -- FOREIGN KEY(id_users) REFERENCES users(id)
);

/* Create other tables and define schemas for them here! */


CREATE TABLE friends (
  id INTEGER PRIMARY KEY,
  id_user1 VARCHAR(14),
  id_user2 VARCHAR(14),
  FOREIGN KEY(id_user1) REFERENCES users(id),
  FOREIGN KEY(id_user2) REFERENCES users(id)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

