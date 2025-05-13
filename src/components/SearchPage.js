import React, { useState } from 'react';
import axios from 'axios';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './SearchPage.css';
import { Link } from 'react-router-dom';

const SearchPage = () => {
  const [bloodGroup, setBloodGroup] = useState('');
  const [location, setLocation] = useState({ lat: -3.745, lng: -38.523 });
  const [city, setCity] = useState('');
  const [useMap, setUseMap] = useState(false);
  const [donors, setDonors] = useState([]);
  const [bloodBanks, setBloodBanks] = useState([]);

  const handleSearch = async () => {
    const params = {
      bloodGroup,
      ...(useMap ? { lat: location.lat, lng: location.lng } : { city })
    };
    try {
      const donorResponse = await axios.get('/api/search/donors', { params });
      setDonors(donorResponse.data);

      const bloodBankResponse = await axios.get('/api/search/bloodbanks', { params });
      setBloodBanks(bloodBankResponse.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleMapClick = (e) => setLocation({ lat: e.latLng.lat(), lng: e.latLng.lng() });

  return (
    <div>
       <Link to="/emergency" className="btn btn-danger m-2">Emergency Request</Link>
      <h2>Search for Blood Donors and Blood Banks</h2>
      <div>
        <label>Blood Group:</label>
        <input type="text" value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)} required />
      </div>
      <div>
        <label>Use Map for Location:</label>
        <input type="checkbox" checked={useMap} onChange={(e) => setUseMap(e.target.checked)} />
      </div>
      {useMap ? (
        <div>
          <label>Location:</label>
          <LoadScript googleMapsApiKey="821859792084-jf4avochgv5v93r1burumevt0tis2v1r.apps.googleusercontent.com">
            <GoogleMap
              mapContainerStyle={{ height: "400px", width: "500px" }}
              center={location}
              zoom={10}
              onClick={handleMapClick}
            >
              <Marker position={location} />
            </GoogleMap>
          </LoadScript>
        </div>
      ) : (
        <div>
          <label>City:</label>
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
        </div>
      )}
      <button onClick={handleSearch}>Search</button>
      <h3>Donors</h3>
      <ul>
        {donors.map((donor) => (
          <li key={donor._id}>
            <p>Name: {donor.name.substring(0, 1)}****</p>
            <p>Blood Group: {donor.bloodGroup}</p>
            <p>Availability: {donor.availability ? 'Available' : 'Unavailable'}</p>
            <p>Contact: <a href={`tel:${donor.contactNumber}`}>{donor.contactNumber}</a></p>
            <p>Email: <a href={`mailto:${donor.email}`}>{donor.email}</a></p>
          </li>
        ))}
      </ul>
      <h3>Blood Banks</h3>
      <ul>
        {bloodBanks.map((bloodBank) => (
          <li key={bloodBank._id}>
            <p>Name: {bloodBank.name}</p>
            <p>Contact: <a href={`tel:${bloodBank.contactNumber}`}>{bloodBank.contactNumber}</a></p>
            <p>Email: <a href={`mailto:${bloodBank.email}`}>{bloodBank.email}</a></p>
            <p>Address: {bloodBank.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;