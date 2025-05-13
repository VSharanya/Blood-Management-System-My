import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import axios from 'axios';
import './RegistrationForm.css';
import {useHistory} from 'react-router-dom';

const RegistrationForm = () => {
  const history = useHistory();
  const [role, setRole] = useState('Donor');
  const [location, setLocation] = useState({ lat: -3.745, lng: -38.523 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    bloodGroup: '',
    contactNumber: '',
    city: '',
    age: '',
    height: '',
    weight: '',
    medicalHistory: ''
  });

  const handleRoleChange = (e) => setRole(e.target.value);
  const handleMapClick = (e) => setLocation({ lat: e.latLng.lat(), lng: e.latLng.lng() });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { ...formData, role, location: { type: 'Point', coordinates: [location.lat, location.lng] } };
    await axios.post('/auth/register', data);
    alert('User registered successfully');
    if(role === 'Donor'){
    history.push('/login');
    }
    else if(role === 'Recipient'){
      history.push('/login1');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>User Role:</label>
        <select value={role} onChange={handleRoleChange}>
          <option value="Donor">Donor</option>
          <option value="Recipient">Recipient</option>
        </select>
      </div>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
      </div>
      {role === 'Donor' && (
        <>
          <div>
            <label>Blood Group:</label>
            <input type="text" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} required />
          </div>
          <div>
            <label>Contact Number:</label>
            <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
          </div>
          <div>
            <label>Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Height (cm):</label>
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Weight (kg):</label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Medical History:</label>
            <textarea
              name="medicalHistory"
              value={formData.medicalHistory}
              onChange={handleChange}
              required
            />
          </div>
        </>
      )}
      <div>
        <label>City:</label>
        <input type="text" name="city" value={formData.city} onChange={handleChange} required />
      </div>
      <div>
        <label>Location:</label>
        <LoadScript googleMapsApiKey="AIzaSyDYX1z_uYqxul9vFigEnOLB60Xbi0ergMI">
          <GoogleMap
            mapContainerStyle={{ height: "400px", width: "550px" }}
            center={location}
            zoom={10}
            onClick={handleMapClick}
          >
            <Marker position={location} />
          </GoogleMap>
        </LoadScript>
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;