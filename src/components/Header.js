import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="header">
      <h1>File Sharing App</h1>
      <div>
        <label className="switch">
          <input 
            type="checkbox" 
            checked={darkMode} 
            onChange={() => setDarkMode(!darkMode)} 
          />
          <span className="slider round"></span>
        </label>
        <Link to="/login">
          <button className="login-button">Login</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
