import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [bloodBanks, setBloodBanks] = useState([]);
  const [reports, setReports] = useState({});
  const [newBloodBank, setNewBloodBank] = useState({
    name: '',
    contactNumber: '',
    email: '',
    address: '',
    location: { lat: -3.745, lng: -38.523 }
  });

  useEffect(() => {
    fetchUsers();
    fetchBloodBanks();
    fetchReports();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get('/api/admin/users');
    setUsers(response.data);
  };

  const fetchBloodBanks = async () => {
    const response = await axios.get('/api/admin/blood-banks');
    setBloodBanks(response.data);
  };

  const fetchReports = async () => {
    const response = await axios.get('/api/admin/reports');
    setReports(response.data);
  };

  const approveDonor = async (id) => {
    await axios.put(`/api/admin/approve-donor/${id}`);
    fetchUsers();
  };

  const handleBloodBankChange = (e) => {
    const { name, value } = e.target;
    setNewBloodBank({ ...newBloodBank, [name]: value });
  };

  const handleMapClick = (e) => {
    setNewBloodBank({ ...newBloodBank, location: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
  };

  const saveBloodBank = async () => {
    await axios.post('/api/admin/blood-bank', newBloodBank);
    fetchBloodBanks();
    setNewBloodBank({
      name: '',
      contactNumber: '',
      email: '',
      address: '',
      location: { lat: -3.745, lng: -38.523 }
    });
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <h3>Approve Donors</h3>
      <ul>
        {users.filter(user => !user.approved && user.role === 'Donor').map(user => (
          <li key={user._id}>
            {user.name} - {user.email}
            <button onClick={() => approveDonor(user._id)}>Approve</button>
          </li>
        ))}
      </ul>
      <h3>Add Blood Bank</h3>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={newBloodBank.name} onChange={handleBloodBankChange} required />
        <label>Contact Number:</label>
        <input type="text" name="contactNumber" value={newBloodBank.contactNumber} onChange={handleBloodBankChange} required />
        <label>Email:</label>
        <input type="email" name="email" value={newBloodBank.email} onChange={handleBloodBankChange} required />
        <label>Address:</label>
        <input type="text" name="address" value={newBloodBank.address} onChange={handleBloodBankChange} required />
       { /*<label>Location:</label>
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap
            mapContainerStyle={{ height: "400px", width: "800px" }}
            center={newBloodBank.location}
            zoom={10}
            onClick={handleMapClick}
          >
            <Marker position={newBloodBank.location} />
          </GoogleMap>
        </LoadScript>*/}
        <button onClick={saveBloodBank}>Save Blood Bank</button>
      </div>
      <h3>Blood Banks</h3>
      <ul>
        {bloodBanks.map(bloodBank => (
          <li key={bloodBank._id}>
            {bloodBank.name} - {bloodBank.contactNumber} - {bloodBank.email} - {bloodBank.address}
          </li>
        ))}
      </ul>
      <h3>Reports</h3>
      <p>Total Users: {reports.totalUsers}</p>
      <p>Total Donors: {reports.totalDonors}</p>
      <p>Total Recipients: {reports.totalRecipients}</p>
      <p>Total Blood Banks: {reports.totalBloodBanks}</p>
      <p>Total Donations: {reports.totalDonations}</p>
    </div>
  );
};

export default AdminPanel;