var models = require('../models');

var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept, X-Parse-Application-Id, X-Parse-REST-API-Key',
  'access-control-max-age': 15 // Seconds.
};
  
let statusCode = 200;
let data; 
let headers;

module.exports = {
  
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      //call the model: X
      //get the headers
      //get all the messages from db
      //once we get the messages
      //send to to client: package it with an object with a reponse
      models.messages.get((error, results) => {
        console.log('these are the results: ', results);
      });
      // data = JSON.stringify({results: data.map(JSON.parse)});
      // res.writeHead(statusCode, headers);
      // res.end(data);
    },
     
    // a function which handles posting a message to the database
    post: function (req, res) {
      
      
      data = JSON.stringify({});
    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

