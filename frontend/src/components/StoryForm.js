import React, { useState } from 'react';
import EmojiPicker from './EmojiPicker';
import { createStory } from '../services/api';

const StoryForm = ({ setStories }) => {
  const [emojiSequence, setEmojiSequence] = useState([]);
  const [authorNickname, setAuthorNickname] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newStory = await createStory({ emojiSequence, authorNickname });
    setStories((prevStories) => [newStory, ...prevStories]);
    setEmojiSequence([]);
    setAuthorNickname('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create a Story</h2>
      <EmojiPicker emojiSequence={emojiSequence} setEmojiSequence={setEmojiSequence} />
      <input
        type="text"
        value={authorNickname}
        onChange={(e) => setAuthorNickname(e.target.value)}
        placeholder="Your Nickname"
        required
      />
      <button type="submit">Save Story</button>
    </form>
  );
};

export default StoryForm;
