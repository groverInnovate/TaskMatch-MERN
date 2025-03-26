import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import './RegisterPage.css';  

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useAuth();  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5003/api/auth/register', formData);

      if (response.status === 201 || response.status === 200) {
        console.log('Registration successful:', response.data);
        navigate('/login');  // ✅ Redirect to login page after registration
      } else {
        setError(response.data?.message || "Registration failed. Please try again.");
      }

    } catch (error) {
      console.error('Registration failed:', error);

      // Properly handle Axios errors
      if (error.response && error.response.data) {
        setError(error.response.data.message || 'Registration failed.');
      } else {
        setError('An unexpected error occurred.');
      }
    }
  };

  return (
    <div className="register-page">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />

        <button type="submit">Register</button>
      </form>

      {/* Display error properly */}
      {error && <p style={{ color: 'red' }}>{typeof error === 'string' ? error : JSON.stringify(error)}</p>}
    </div>
  );
};

export default RegisterPage;

