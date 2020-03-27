const express = require('express');
const app = express();
const port = 3000;
const products = require('./products.js');
const db = require('./db.js');

// app.get('/', (req, res) => res.send('Hello World!'));

//TODO: Serve static HTML page aka empty shopping cart

//Routes for shopping list
//TODO: Create GET for product list
app.get('/product', (req, res) => {
  res.send(products);
});

//Routes for shopping cart
//TODO: Create GET display cart items

//TODO: Create PUT to add item to cart

//TODO: Create POST to create a new cart

//TODO: Create DELETE to remove item from cart


app.listen(port, () => console.log(`Listening to port:${port}`));
