import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DonorStatistics = () => {
  const [donorData, setDonorData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/donor', {
        headers: { Authorization: token }
      });
      setDonorData(response.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {donorData ? (
        <div>
          <h2>Donor Statistics</h2>
          <p>Number of Donations: {donorData.donations}</p>
          <p>Total Lives Impacted: {donorData.donations * 3}</p> {/* Assuming each donation impacts 3 lives */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DonorStatistics;