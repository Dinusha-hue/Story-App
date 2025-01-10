const express = require('express');
const mongoose = require('mongoose');
const emojiRoutes = require('./routes/emojiRoutes');
const cors = require('cors');
const dotenv = require('dotenv');

require('dotenv').config;

const app = express();

app.use(express.json());
app.use(cors());

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
    .then(console.log('Mongo DB Connected'))
    .catch( err => console.error(err));

app.use('/api/emoji',emojiRoutes);

const PORT = process.env.PORT || 5000;
app.listen( PORT, () => console.log(`Server running on ${PORT}`));