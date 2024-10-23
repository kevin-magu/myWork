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
    const searchResults = document.querySelector('.search-results');
    const projectLlink = document.querySelector('.projects-link');
    const innovationLink = document.querySelector('.innovation-link');
    const resultCloseButton = document.querySelector('.result-close-button')

    // Handling contact display
    const handleGetInTouchClick = () => {
      contacts.style.display = "flex";
    };

    // Close contacts when clicking outside
    const handleDocumentClick = (event) => {
      const getInTouch = document.querySelector('.get-in-touch-link');
      if (!contacts.contains(event.target) && !getInTouch.contains(event.target)) {
        contacts.style.display = 'none';
      }
    };

    document.addEventListener('click', handleDocumentClick);

    function handleProjectInnovationClick(){
      searchResults.style.display='flex'
    }
    function handleSearchResultDivClosing(){
      searchResults.style.display='none'
    }
    resultCloseButton.addEventListener('click', handleSearchResultDivClosing)
    innovationLink.addEventListener('click', handleProjectInnovationClick)
    projectLlink.addEventListener('click', handleProjectInnovationClick)

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
            <FaTools className="navbar-icon" /> Projects <FaChevronDown className="nav-dropdown" />
          </Link>
          <Link className="link innovation-link">
            <FaBrain className="navbar-icon" /> Innovation <FaChevronDown className="nav-dropdown" />
          </Link>
          <Link className="link">
            <FaBookOpen className="navbar-icon" /> Thoughts
          </Link>

          <span className="get-in-touch-link" onClick={() => document.querySelector('.contacts').style.display = 'flex'}>
            <span className="span-text">
              <FaPhone className="navbar-icon" /> Get In Touch <FaChevronDown className="nav-dropdown" />
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

          <div className="search-results-wrapper"></div>
          <div className="search-results">
            <button className="result-close-button">Close</button>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
