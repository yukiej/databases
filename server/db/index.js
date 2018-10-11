var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'chat'
});

dbConnection.connect(function(err) {
  if (err) {
    console.log('Connection error');
  } else {
    console.log('Success!');
  }
});


module.exports = dbConnection;
