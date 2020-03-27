var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shoppingCart', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('connected to the database'));

var cartSchema = new mongoose.Schema({
  id: String,
  description: String,
  unit_price: Number,
  volume_discounts: [{
    qty: Number,
    price: Number
  }]
});

var Item = mongoose.model('Item', cartSchema);

module.exports = Item;
