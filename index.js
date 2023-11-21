const express = require('express');
const bodyParser = require('body-parser');
const userController = require("./controllers/user");
const app = express();

// Middleware
app.use(bodyParser.json());

// Route for handling user data
app.get('/', userController); // Pass the function directly

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
