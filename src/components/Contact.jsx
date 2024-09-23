import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faTwitter, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'; 

const Contact = () => {
  return (
    <div className="contact-section">
      <h1>Contact Us</h1>
      <p>
        We’re here to help with any questions or inquiries you may have.
        Whether you’re interested in our services, need support, or just want
        to say hello, feel free to reach out!
      </p>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>We'd Love to Hear from You!</p>
          <div className="info-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
            <p>Address: Technopole,Manouba,Tunisia</p>
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <p>Phone Number: +21621999898</p>
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <p>Email:hello.redix@outlook.com</p>
          </div>

          <div className="social-media">
            <p>Follow Us:</p>
            <a href="https://www.linkedin.com">
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            </a>
            <a href="https://www.instagram.com/redixdigitalsolutions/">
              <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61560535962106">
              <FontAwesomeIcon icon={faFacebook} className="social-icon" />
            </a>
            <a href="https://x.com/RedixDS">
              <FontAwesomeIcon icon={faTwitter} className="social-icon" />
            </a>
            
            <a href="https://www.tiktok.com/@redix.digital.sol">
              <FontAwesomeIcon icon={faTiktok} className="social-icon" />
            </a>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send a Message</h2>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
