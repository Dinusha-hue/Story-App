const mongoose = require('mongoose');

const translationSchema = new mongoose.Schema({
    storyId:{ type: mongoose.Schema.Types.ObjectId, ref: 'Emoji', require: true },
    translation: { type: String },
    votes: { type:Number },

}, {timestamps: true});

module.exports = mongoose.model("Translation",translationSchema);