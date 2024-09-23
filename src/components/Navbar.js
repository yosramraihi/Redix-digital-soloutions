
import React from 'react';
import './Navbar.css';
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaTiktok ,FaClock} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faClock } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="top-navbar">
      <div className="contact-info">
        <a className='info'>hello.redix@outlook.com</a>
        <a className='info'>+21621999898</a>
        <a className='info'>Technopole,Manouba,Tunisia</a>
      </div>
      <div className="social-links">
      <span className="time">
          <FontAwesomeIcon icon={faClock}/> 08.00am-06.00pm
        </span>
        <span className="social-icons">
          <a href="#" className="icon"><FaLinkedin /></a>
          <a href="https://www.instagram.com/redixdigitalsolutions/" className="icon"><FaInstagram /></a>
          <a href="https://www.facebook.com/profile.php?id=61560535962106" className="icon"><FaFacebook /></a>
          <a href="https://x.com/RedixDS" className="icon"><FaTwitter /></a>
          <a href="https://www.tiktok.com/@redix.digital.sol" className="icon"><FaTiktok /></a>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
