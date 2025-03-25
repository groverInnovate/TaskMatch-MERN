import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthenticated, logout } from '../services/authService';
import './Navbar.css';  

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">TaskMatch</Link>
        <div className="navbar-buttons">
          {isAuthenticated() ? (
            <>
              <Link to="/home" className="btn">Home</Link>
              <Link to="/create" className="btn">Create Task</Link>
              <button onClick={handleLogout} className="btn logout-btn">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn">Login</Link>
              <Link to="/register" className="btn">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



