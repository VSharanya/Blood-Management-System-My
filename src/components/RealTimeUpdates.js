import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RealTimeUpdates = () => {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    const fetchUpdates = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/updates', {
        headers: { Authorization: token }
      });
      setUpdates(response.data);
    };
    fetchUpdates();
  }, []);

  return (
    <div>
      <h2>Real-Time Updates</h2>
      <ul>
        {updates.map((update, index) => (
          <li key={index}>{update.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default RealTimeUpdates;