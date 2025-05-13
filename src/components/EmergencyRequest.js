import React, { useState } from 'react';
import axios from 'axios';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const EmergencyRequest = () => {
  const [bloodGroup, setBloodGroup] = useState('');
  const [location, setLocation] = useState({ lat: -3.745, lng: -38.523 });
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [radius, setRadius] = useState(10);
  const [useMap, setUseMap] = useState(false);

  const handleRequest = async () => {
    const params = {
      bloodGroup,
      radius,
      ...(useMap ? { lat: location.lat, lng: location.lng } : { city, address })
    };
    const response = await axios.post('/api/notify', params);
    alert(response.data.message);
  };

  const handleMapClick = (e) => setLocation({ lat: e.latLng.lat(), lng: e.latLng.lng() });

  return (
    <div>
      <h2>Emergency Blood Request</h2>
      <div>
        <label>Blood Group:</label>
        <input type="text" value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)} required />
      </div>
      <div>
        <label>Radius (km):</label>
        <input type="number" value={radius} onChange={(e) => setRadius(e.target.value)} required />
      </div>
      <div>
        <label>Use Map for Location:</label>
        <input type="checkbox" checked={useMap} onChange={(e) => setUseMap(e.target.checked)} />
      </div>
      {useMap ? (
        <div>
          <label>Location:</label>
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={{ height: "400px", width: "800px" }}
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
          <label>Address:</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
      )}
      <button onClick={handleRequest}>Send Emergency Request</button>
    </div>
  );
};

export default EmergencyRequest;