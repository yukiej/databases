var db = require('../db');

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (callback) {
      db.query('SELECT id, message FROM messages', (error, results, fields) => {
        // console.log('these are our inputs: ', error, results, fields);
        console.log("is this the message? ", results[0]);
        console.log('these are the results:', results);
        if ( error ) {
          callback(error);
        } else {
          console.log(results);
          callback(null, results[0]);
        }
      });
    },
    
    // a function which can be used to insert a message into the database
    post: function (callback, req) {
      console.log('this is req: ', req);
      // let queryArgs = {id};
      db.query('INSERT INTO messages (id, message, id_rooms, id_users) VALUES ?', queryArgs, (error, results) => {
        if (error) {
          callback(error);
        } else {
          callback(null, results);
        }
        
      });
    } 
  },
  
  users: {
    // Ditto as above.
    get: function (callback) {
      db.query('SELECT username FROM users', (error, results, fields) => {
        console.log('these are our inputs: ', error, results, fields);
        if ( error ) {
          callback(error);
        } else {
          callback(null, results);
        }
      });
    },
    
    post: function (callback, req) {
      db.query('INSERT INTO users (id, username) VALUES ?', queryArgs, (error, results) => {
        if (error) {
          callback(error);
        } else {
          callback(null, results);
        }
        
      });
    }
  }
};

