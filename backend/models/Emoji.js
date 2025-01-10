const mongoose = require('mongoose');

const emojiSchema = new mongoose.Schema({
    emojiSequence:[{ type:String }],
    translation: { type:String },
    authorNickname: { type:String },
    likes: { type:Number },

}, {timestamps: true});

module.exports = mongoose.model("Emoji",emojiSchema);