import React, { useEffect, useState, useRef } from 'react';
import ActionButton from './ActionButton';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaEnvelope, FaWhatsapp, FaPhone, FaLinkedin, FaHome, FaTools, FaBrain, FaBookOpen } from 'react-icons/fa';
import { SiTrueup } from 'react-icons/si';

function Navbar() {
  // Ensure `useState` is imported and used correctly
  const [navIsOpen, setNavIsOpen] = useState(false)
 
 
  // Refs for DOM elements
  const contactsRef = useRef(null);
  const getInTouchLinkRef = useRef(null);
  const mobileNavbarRef = useRef(null);
  const navLink = useRef(null);

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
    
    //screen resize
    
    function changeNavOpenStatus(){
      const windowWidh = window.innerWidth;
      if(windowWidh> 890){
        setNavIsOpen(false)
      }
    }

    window.addEventListener('resize', changeNavOpenStatus)

    
    
      
    

    // Cleanup listeners on unmount
    return () => {
      getInTouchLinkRef.current?.removeEventListener('click', handleGetInTouchClick);
      document.removeEventListener('click', handleDocumentClick);
      window.removeEventListener('resize', changeNavOpenStatus)
    };
  }, []);
  

  return (
    <nav className="navigation-wrapper">
      <div className="action-button nav-top-button">
        <ActionButton actionButtonContent="info.kevin.co.ke" />
      </div>

      <div className="menu-bar" onClick={() => setNavIsOpen((prev) => !prev )}>
        <span
          className="line1"
          style={{
            transform: navIsOpen ? 'rotate(45deg) translateY(6px)' : 'rotate(0deg) translateY(0px)',
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
        style ={{
         width : navIsOpen? '200px' : '',
         display : navIsOpen? 'flex': '',
        transition: navIsOpen? 'width 0.3s ease-in-out' : '' // Smooth transition
        }}
      
      >
        <Link className="link" to="/" style={{display : navIsOpen? 'flex' : ''}}>
          <FaHome className="navbar-icon" /> Home
        </Link>
        <Link className="link projects-link" style={{display : navIsOpen? 'flex' : ''}}>
          <FaTools className="navbar-icon"/> Projects 
        </Link>
        <Link className="link innovation-link" style={{display : navIsOpen? 'flex' : ''}}>
          <FaBrain className="navbar-icon" /> Innovation 
        </Link>
        <Link className="link" style={{display : navIsOpen? 'flex' : ''}}>
          <FaBookOpen className="navbar-icon" /> Thoughts
        </Link>

        <span
          ref={getInTouchLinkRef}
          className="get-in-touch-link"
          style={{display : navIsOpen? 'flex' : ''}}
        >
          <span className="span-text" >
            <FaPhone className="navbar-icon" /> Get In Touch 
          </span>
          <div ref={contactsRef} className="contacts">
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
