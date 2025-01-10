const mongoose = require('mongoose');

const TranslationSchema = new mongoose.Schema({
  storyId: { type: mongoose.Schema.Types.ObjectId, ref: 'EmojiStory', required: true },
  translation: { type: String, required: true },
  votes: { type: Number, default: 0 },
});

module.exports = mongoose.model('Translation', TranslationSchema);
