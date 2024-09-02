// index.js
const express = require('express'); 
const connectDB = require('./db'); 
const cardRoutes = require('./routes/card'); 
const user =require('./routes/user')
const cors = require('cors'); 
const app = express(); 
const port = 3000; 


connectDB();


app.use(cors()); 
app.use(express.json());

// Routes
app.use('/cards', cardRoutes); 
app.use('/user', user)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
