import React, { useState } from 'react';
import axios from 'axios';
import './FeedbackForm.css';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const userId = JSON.parse(atob(token.split('.')[1])).id; // Decode JWT to get user ID
    try {
      const response = await axios.post('/api/feedback', { userId, feedback, rating });
      alert('Feedback submitted successfully');
      setFeedback('');
      setRating(0);
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Failed to submit feedback');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Leave Feedback</h2>
      <div>
        <label>Feedback:</label>
        <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} required />
      </div>
      <div>
        <label>Rating:</label>
        <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} required min="1" max="5" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;