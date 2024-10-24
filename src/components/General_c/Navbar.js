import React, { useEffect } from 'react';
import ActionButton from './ActionButton';
import { Link, useNavigate } from 'react-router-dom';
import { FaChevronDown, FaEnvelope, FaWhatsapp, FaPhone, FaLinkedin, FaHome, FaTools, FaBrain, FaBookOpen } from 'react-icons/fa';

// Innovation images
import aiCardimage from '../../images/ai-card-image.jpg';
import spaceCardImage from '../../images/space-card-image2.jpg';
import climateChangeImage from '../../images/other-card-image.jpg';

function Navbar() {
  useEffect(() => {
    const contacts = document.querySelector('.contacts');
    const getInTouchLink = document.querySelector('.get-in-touch-link');



    // Handling contact display
    const handleGetInTouchClick = () => {
      contacts.style.display = "flex";
    };
    getInTouchLink.addEventListener('click', handleGetInTouchClick)

    // Close contacts when clicking outside
    const handleDocumentClick = (event) => {
      const getInTouch = document.querySelector('.get-in-touch-link');
      if (!contacts.contains(event.target) && !getInTouch.contains(event.target)) {
        contacts.style.display = 'none';
      }
    };

    document.addEventListener('click', handleDocumentClick);


    // Clean-up function
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <div>
      <nav className="navigation-wrapper">
        <div className="action-button nav-top-button">
          <ActionButton actionButtonContent="info.kevin.co.ke" />
        </div>

        <div className="menu-bar">
          <span className="line1"></span>
          <span className="line2"></span>
        </div>

        <ul>
          <Link className="link" to="/">
            <FaHome className="navbar-icon" /> Home
          </Link>
          <Link className="link projects-link">
            <FaTools className="navbar-icon"/> Projects 
          </Link>
          <Link className="link innovation-link">
            <FaBrain className="navbar-icon" /> Innovation 
          </Link>
          <Link className="link">
            <FaBookOpen className="navbar-icon" /> Thoughts
          </Link>

          <span className="get-in-touch-link">
            <span className="span-text">
              <FaPhone className="navbar-icon" /> Get In Touch 
            </span>
            <div className="contacts">
              <p>
                <FaEnvelope className="nav-icon" /> Email: info.kevin.co.ke
              </p>
              <p>
                <FaPhone className="nav-icon" /> Call: 0797692537
              </p>
              <p>
                <FaLinkedin className="nav-icon" /> Linkedin
              </p>
            </div>
          </span>

          
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
