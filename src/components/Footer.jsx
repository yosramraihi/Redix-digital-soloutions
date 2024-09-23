import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/redix1.png'; // Adjust the path to your logo file

const Footer = ({ onScrollToOffer, onScrollToContact, onScrollToAbout, onScrollToPortfolio }) => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Redix Logo" className="footer-logo-img" /> {/* Add logo here */}
      </div>
      <div className="footer-contact">
        <div className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} size="2x" className="footer-icon" />
          <p>hello.redix@outlook.com</p>
          <span>Our mail</span>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faPhone} size="2x" className="footer-icon" />
          <p>+21621999898</p>
          <span>Our phone</span>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" className="footer-icon" />
          <p>Technopole,Manouba,Tunisia</p>
          <span>Our address</span>
        </div>
      </div>
      <div className="footer-nav">
        <button onClick={onScrollToOffer} className="footer-nav-btn">Home</button>
        <button onClick={onScrollToOffer} className="footer-nav-btn">Fazetna</button>
        <button onClick={onScrollToPortfolio} className="footer-nav-btn">Portfolio</button>
        <button onClick={onScrollToAbout} className="footer-nav-btn">About Us</button>
      </div>
      <div className="footer-copyright">
        <p>© 2024 REDIX digital soloutions Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

