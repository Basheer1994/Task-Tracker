require('dotenv').config(); 

const express = require('express');
const connectDB = require('../backend/config/db')

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Call the function to connect to MongoDB
connectDB();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
