import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const fetchStories = async () => {
  try {
    const response = await axios.get(`${API_URL}/stories`);
    return response.data;
  } catch (error) {
    console.error('Error fetching stories:', error);
    return [];
  }
};

export const createStory = async (storyData) => {
  try {
    const response = await axios.post(`${API_URL}/stories`, storyData);
    return response.data;
  } catch (error) {
    console.error('Error creating story:', error);
    return null;
  }
};
