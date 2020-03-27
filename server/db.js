var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/items', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('connected to the database'));

var itemSchema = new mongoose.Schema({
  id: String,
  description: String,
  unit_price: Number,
  volume_discounts: [{
    amount: Number,
    price: Number
  }]
});

