var db = require('../db');

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (callback) {
      db.query('SELECT id, message FROM messages', (error, results, fields) => {
        // console.log('these are our inputs: ', error, results, fields);
        // console.log("is this the message? ", results[0]);
        // console.log('these are the results:', results);
        if ( error ) {
          callback(error);
        } else {
          console.log(results);
          callback(null, results[0]);
        }
      });
    },
    
    // a function which can be used to insert a message into the database
    post: function (req, callback) {
      console.log('this is req.body: ', req.body);
      let username = req.body.username;
      let message = req.body.message;
      let roomname = req.body.roomname;
      let params = [message, roomname, username];
      db.query('INSERT INTO messages (message, rooms, id_users) \
        VALUES (?, ?, ?)', params, (error, results) => {
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
        // console.log('these are our inputs: ', error, results, fields);
        if ( error ) {
          callback(error);
        } else {
          callback(null, results);
        }
      });
    },
    
    post: function (callback, req) {
      console.log('this is req: ', req);
      let username = req.body.username;
      // console.log("The username for users.post is ", req.body.username);
      db.query(`INSERT INTO users id VALUES ${username}`, queryArgs, (error, results) => {
        if (error) {
          callback(error);
        } else {
          callback(null, results);
        }
        
      });
    }
  }
};

