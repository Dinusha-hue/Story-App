const express = require('express');
const { translateStory } = require('../controllers/translationController');
const router = express.Router();

router.get('/:storyId', translateStory);

module.exports = router;
