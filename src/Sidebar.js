// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

function Sidebar({ isOpen }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <ul>
        <li><Link to="/HomePage">Home</Link></li>
        <li><Link to="/Products">Products</Link></li>
        <li><Link to="/Services">Services</Link></li>
        <li><Link to="/Jobs">Careers</Link></li>
        <li><Link to="/Cart">Cart</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;