const EmojiStory = require('../models/EmojiStory');

exports.createStory = async (req, res, next) => {
  try {
    const { emojiSequence, authorNickname } = req.body;

    const translation = 'Auto-generated translation';
    const story = await EmojiStory.create({ emojiSequence, translation, authorNickname });

    res.status(201).json(story);
  } catch (error) {
    next(error);
  }
};

exports.getStories = async (req, res, next) => {
  try {
    const stories = await EmojiStory.find().sort({ createdAt: -1 });
    res.json(stories);
  } catch (error) {
    next(error);
  }
};
