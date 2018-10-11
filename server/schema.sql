CREATE DATABASE chat;

USE chat;

CREATE TABLE rooms (
  id INTEGER PRIMARY KEY,
  roomname TEXT
);

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  username TEXT
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id INTEGER PRIMARY KEY,
  message TEXT,
  id_rooms INTEGER, 
  id_users INTEGER,
  FOREIGN KEY(id_rooms) REFERENCES rooms(id),
  FOREIGN KEY(id_users) REFERENCES users(id)
);

/* Create other tables and define schemas for them here! */


CREATE TABLE friends (
  id INTEGER PRIMARY KEY,
  id_user1 INTEGER,
  id_user2 INTEGER,
  FOREIGN KEY(id_user1) REFERENCES users(id),
  FOREIGN KEY(id_user2) REFERENCES users(id)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

