var db = require('../db');

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (callback) {
      db.query('SELECT * FROM messages', (error, results, fields) => {
        console.log('these are our inputs: ', error, results, fields);
        if ( error ) {
          callback(error);
        } else {
          callback(null, results);
        }
      });
    },
    
    // a function which can be used to insert a message into the database
    post: function (callback) {} 
  },
  
  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

