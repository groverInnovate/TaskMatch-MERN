import React from 'react';
import './Footer.css';  // Import the CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} TaskMatch. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

