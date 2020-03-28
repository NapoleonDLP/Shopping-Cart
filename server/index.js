const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const products = require('./products.js');
const Item = require('./db.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get('/', (req, res) => res.send('Hello World!'));

//TODO: Serve static HTML page aka empty shopping cart

//Routes for shopping list
//TODO: Create GET for product list
app.get('/products', (req, res) => {
  res.send(products);
});

//Routes for shopping cart
//TODO: Create GET display cart items
app.get('/cart', (req, res) => {
  Item.find({}, (err, items) => {
    if (err) {
      console.log(err)
    }
    res.send(items);
  })
});

//TODO: Create PUT to add item to cart

//Create POST to add items to cart
app.post('/cart', (req, res) => {
  let item = Item(req.body);
  item.save((err) => {
    if (err) {
      console.error(err);
      res.send(400);
    }
    res.sendStatus(200);
  });
});

//Create DELETE to remove item from cart
app.delete('/delete', (req, res) => {
  var itemId = req.body.id;
  Item.deleteOne({id:itemId}, (err, doc) => {
    if(err) {
      console.log(err)
      res.sendStatus(500);
    }
    res.send(doc);
  });
});

app.listen(port, () => console.log(`Listening to port:${port}`));
