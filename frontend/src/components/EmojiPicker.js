import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

const EmojiPickerComponent = () => {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (emojiData, event) => {
    setChosenEmoji(emojiData);
  };

  return (
    <div>
      <h1>Choose an Emoji</h1>
      <EmojiPicker onEmojiClick={onEmojiClick} />
      {chosenEmoji && (
        <div>
          <p>Selected Emoji: {chosenEmoji.emoji}</p>
        </div>
      )}
    </div>
  );
};

export default EmojiPickerComponent;
