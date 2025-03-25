import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Import the CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">TaskMatch</Link>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/create">Create Task</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

