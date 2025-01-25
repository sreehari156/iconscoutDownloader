const express = require('express');
const app = express();

// Basic route to test the function
app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'Hello, World from Appwrite Express function!',
  });
});

// Handling HTTP requests from Appwrite functions
module.exports = async function (req, res) {
  app(req, res);  // Pass the request and response to Express
};
