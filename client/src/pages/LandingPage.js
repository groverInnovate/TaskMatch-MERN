import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';  

const LandingPage = () => {
  return (
    <div className="landing-container">
      <h1>Welcome to TaskMatch</h1>
      <p>Your go-to platform for task exchange!</p>
      <div className="btn-group">
        <Link to="/login" className="btn">Login</Link>
        <Link to="/register" className="btn">Register</Link>
      </div>
    </div>
  );
};

export default LandingPage;
