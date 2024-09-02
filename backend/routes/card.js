// routes/cards.js
const express = require('express');
const router = express.Router();
const Card = require('../models/Card.js');


// GET all cards
router.get('/card-get', async (req, res) => {
  try {
    const cards = await Card.find().sort({createdAt :-1}).limit(3);
    res.json(cards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new card
router.post('/card-post', async (req, res) => {
  const card = new Card({
    img: req.body.img,
    title: req.body.title,
    price: req.body.price,
    location: req.body.location,
    rating: req.body.rating,
  });

  try {
    const newCard = await card.save();
    res.status(201).json(newCard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
