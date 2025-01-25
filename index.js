const express = require('express');
const serverless = require('serverless-http');
const app = express();

// Basic route to test the function
app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'Hello, World from Appwrite Express function!',
  });
});

// Wrap the express app with serverless-http
module.exports.handler = serverless(app);
