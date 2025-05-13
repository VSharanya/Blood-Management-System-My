import React, { useState } from 'react';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';
import './LoginForm.css';

const LoginForm1 = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/auth/login', formData);
      if (response.data.success) {
        alert('Login successful');
        localStorage.setItem('token', response.data.token);
        window.location.href = '/search'; // Redirect to dashboard
      } else {
        alert('Login failed');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Login failed');
    }
  };

  const handleGoogleSuccess = async (response) => {
    const token = response.tokenId;
    try {
      const res = await axios.post('/auth/google', { token });
      if (res.data.success) {
        alert('Google login successful');
        localStorage.setItem('token', res.data.token);
        window.location.href = '/search'; // Redirect to dashboard
      } else {
        alert('Google login failed');
      }
    } catch (error) {
      console.error('Error with Google login:', error);
      alert('Google login failed');
    }
  };

  const handleGoogleFailure = (response) => {
    console.error('Google login failed:', response);
    alert('Google login failed');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
      </div>
      <button type="submit">Login</button>
      <GoogleLogin
        clientId="821859792084-jf4avochgv5v93r1burumevt0tis2v1r.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={handleGoogleSuccess}
        onFailure={handleGoogleFailure}
        cookiePolicy={'single_host_origin'}
      />
    </form>
  );
};

export default LoginForm1;