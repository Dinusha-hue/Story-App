require('dotenv').config;
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const storyRoutes = require('./routes/storyRoutes');
const translationRoutes = require('./routes/translationRoutes');

const app = express();
app.use(express.json());
app.use(cors());

const mongoURI = process.env.MONGO_URI || 'mongodb+srv://dinushaweerasekara312:W6VxKUYEmgGUCDIo@assesment.bq6yx.mongodb.net/';

if (!mongoURI) {
  console.error("MongoDB URI is not defined in the environment variables.");
  process.exit(1);
}

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

app.use('/api/stories', storyRoutes);
app.use('/api/translations', translationRoutes);

app.use(require('./middlewares/errorHandler'));

const PORT = process.env.PORT || 5000;
app.listen( PORT, () => console.log(`Server running on ${PORT}`));