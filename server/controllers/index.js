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
      // console.log("I have received a get request for messages!");
      // console.log('We are in the messages get! Here is the res:', res);
      models.messages.get((error, results) => {
        if ( error ) {
          console.log('error');
        } else {
          data = JSON.stringify(results);
          res.writeHead(statusCode, headers);
          res.end(data);
        }
      });
      // data = JSON.stringify({results: data.map(JSON.parse)});
      // res.writeHead(statusCode, headers);
      // res.end(data);
    },
     
    // a function which handles posting a message to the database
    post: function (req, res) {
      console.log("the req is: ", req);
      let reqBody = '';
      // req.on('data', data => reqBody += data);
      // req.on('end', () => {
      //   JSON.parse(reqBody);
      //   models.messages.post(()=>{}, reqBody);
      // });
      models.messages.post(req, (error, results) => {
        if ( error ) {
          console.log(error);
        } else {
          statusCode = 201;
          res.writeHead(statusCode, headers);
          data = JSON.stringify({});
          res.end(data); 
        }
      });
      
    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((error, results) => {
        if ( error ) {
          console.log('error');
        } else {
          data = JSON.stringify(results);
          res.writeHead(statusCode, headers);
          res.end(data);
        }
      });
    },
    post: function (req, res) {
      models.users.post(req.body.username, (error, results) => {
        if ( error ) {
          console.log('error posting user');
        } else {
          data = JSON.stringify({});
          statusCode = 201; 
          res.writeHead(statusCode, headers);
          res.end(data);
        }
      });
    }
  }
};

