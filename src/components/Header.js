import React from 'react';
import './Header.css';
import logo from '../images/redix.png';

const Header = ({ onFazetnaClick, onContactClick, onAboutClick, onScrollToPortfolio }) => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Redix Logo" className="logo-img" /> {/* Logo image */}
      </div>
      <nav className="main-nav">
        <ul>
          <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="nav-btn">Home</button></li>
          <li><button onClick={onFazetnaClick} className="nav-btn">Fazetna</button></li>
          <li><button onClick={onScrollToPortfolio} className="nav-btn">Portfolio</button></li> 
          <li><button onClick={onAboutClick} className="nav-btn">About Us</button></li> 
        </ul>
      </nav>
      <button className="contact-btn" onClick={onContactClick}>CONTACT US</button>
    </header>
  );
};

export default Header;


