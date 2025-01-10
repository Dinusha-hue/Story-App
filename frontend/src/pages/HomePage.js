import React, { useState, useEffect } from 'react';
import StoryForm from '../components/StoryForm';
import StoryList from '../components/StoryList';
import { fetchStories } from '../services/api';

const HomePage = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const getStories = async () => {
      const fetchedStories = await fetchStories();
      setStories(fetchedStories);
    };
    getStories();
  }, []);

  return (
    <div className="home-page">
      <h1>Emoji Story Generator</h1>
      <StoryForm setStories={setStories} />
      <StoryList stories={stories} />
    </div>
  );
};

export default HomePage;
