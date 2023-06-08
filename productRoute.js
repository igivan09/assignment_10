const express = require('express');
const Product = require('./models/Product');

const app = express();

app.get('/products', async (req, res) => {
  try {
    const products = await Product.find({}, 'name price');
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
