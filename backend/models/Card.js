// models/Card.js
const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  img: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: String, required: true },
  location: { type: String, required: true },
  rating: { type: Number, required: true },
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
