const express = require('express');
const serverless = require('serverless-http');
const app = express();
const port=process.env.PORT || 3000;

// Basic route to test the function
app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'Hello, World from Appwrite Express function!',
  });
});

// Wrap the express app with serverless-http
app.listen(port, () => {        
  console.log(`Server running on port ${port}`);
} );  
