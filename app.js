const express = require('express');
const productRoute = require('./productRoute');
const generateToken = require('./authUtils');
const authenticate = require('./authMiddleware');

const app = express();

// Register the route for handling GET /products
app.use('/products', productRoute);

// Generate a token
const token = generateToken('user123', 'your-secret-key');
console.log('Generated token:', token);

// Middleware to authenticate requests
app.use(authenticate);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
