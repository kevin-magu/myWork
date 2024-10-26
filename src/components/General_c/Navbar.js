import React, { useEffect, useState, useRef } from 'react';
import ActionButton from './ActionButton';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaEnvelope, FaWhatsapp, FaPhone, FaLinkedin, FaHome, FaTools, FaBrain, FaBookOpen } from 'react-icons/fa';

function Navbar() {
  const [navIsOpen, setNavIsOpen] = useState(false); // Ensure `useState` is imported and used correctly
  
  // Refs for DOM elements
  const contactsRef = useRef(null);
  const getInTouchLinkRef = useRef(null);
  const mobileNavbarRef = useRef(null);

  useEffect(() => {
    // Toggle contacts display
    const handleGetInTouchClick = () => {
      if (contactsRef.current) {
        contactsRef.current.style.display = "flex";
      }
    };

    // Close contacts when clicking outside
    const handleDocumentClick = (event) => {
      if (
        contactsRef.current &&
        getInTouchLinkRef.current &&
        !contactsRef.current.contains(event.target) &&
        !getInTouchLinkRef.current.contains(event.target)
      ) {
        contactsRef.current.style.display = 'none';
      }
    };

    // Add event listeners
    getInTouchLinkRef.current?.addEventListener('click', handleGetInTouchClick);
    document.addEventListener('click', handleDocumentClick);

    // Cleanup listeners on unmount
    return () => {
      getInTouchLinkRef.current?.removeEventListener('click', handleGetInTouchClick);
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <nav className="navigation-wrapper">
      <div className="action-button nav-top-button">
        <ActionButton actionButtonContent="info.kevin.co.ke" />
      </div>

      <div className="menu-bar" onClick={() => setNavIsOpen((prev) => !prev)}>
        <span
          className="line1"
          style={{
            transform: navIsOpen ? 'rotate(45deg) translateY(5px)' : 'rotate(0deg) translateY(0px)',
          }}
        ></span>
        <span
          className="line2"
          style={{
            transform: navIsOpen ? 'rotate(-45deg) translateY(-5px)' : 'rotate(0deg) translateY(0px)',
            width: navIsOpen ? '25px' : '',
          }}
        ></span>
      </div>

      <ul
        ref={mobileNavbarRef}
        className="mobile-navbar"
        style={{ width: navIsOpen ? '200px' : '0px' }}
      >
        <Link className="link" to="/" style={{ display: navIsOpen ? 'flex' : 'none' }}>
          <FaHome className="navbar-icon" /> Home
        </Link>
        <Link className="link projects-link" style={{ display: navIsOpen ? 'flex' : 'none' }}>
          <FaTools className="navbar-icon"/> Projects 
        </Link>
        <Link className="link innovation-link" style={{ display: navIsOpen ? 'flex' : 'none' }}>
          <FaBrain className="navbar-icon" /> Innovation 
        </Link>
        <Link className="link" style={{ display: navIsOpen ? 'flex' : 'none' }}>
          <FaBookOpen className="navbar-icon" /> Thoughts
        </Link>

        <span
          ref={getInTouchLinkRef}
          className="get-in-touch-link"
          style={{ display: navIsOpen ? 'flex' : 'none' }}
        >
          <span className="span-text">
            <FaPhone className="navbar-icon" /> Get In Touch 
          </span>
          <div ref={contactsRef} className="contacts" style={{ display: 'none' }}>
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
  );
}

export default Navbar;
