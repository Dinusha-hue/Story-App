const Translation = require('../models/Translation');
const EmojiStory = require('../models/EmojiStory');

exports.translateStory = async (req, res, next) => {
  try {
    const { storyId } = req.params;
    const story = await EmojiStory.findById(storyId);

    if (!story) return res.status(404).json({ message: 'Story not found' });

    const translation = 'Humorous translation based on patterns';
    res.json({ translation });
  } catch (error) {
    next(error);
  }
};
