const express = require('express');
const { addEmoji } = require('../controllers/emojiController');
const router = express.Router();

router.post('/add',addEmoji);

module.exports = router;