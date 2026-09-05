import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-text">
          <h1 className="name">Sridhar Kumar</h1>
          <p className="tagline">Software &amp; ML Systems Engineer | MS in Computer Science @ UF</p>
          <p className="header-location">Gainesville, FL</p>
        </div>
        <div className="header-photo">
          <img 
            src="/profile-photo.jpg" 
            alt="Sridhar Kumar" 
            className="profile-image"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
