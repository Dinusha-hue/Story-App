import React from 'react';

const StoryList = ({ stories }) => {
  return (
    <div>
      <h2>Saved Stories</h2>
      <ul>
        {stories.map((story) => (
          <li key={story.id}>
            <p>{story.emojiSequence.join(' ')}</p>
            <p>Translation: {story.translation}</p>
            <p>Author: {story.authorNickname}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StoryList;
