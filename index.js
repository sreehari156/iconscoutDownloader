
const express = require("express");


const app = express();
const port = 3000||process.env.PORT;



// Helper: Get a browser instance


// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send({ message: "Welcome to the API!" });
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Serverless Handler
