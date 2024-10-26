import React, { useEffect, useState } from 'react';
import ActionButton from './ActionButton';
import { Link, useNavigate } from 'react-router-dom';
import { FaChevronDown, FaEnvelope, FaWhatsapp, FaPhone, FaLinkedin, FaHome, FaTools, FaBrain, FaBookOpen } from 'react-icons/fa';


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

//opening and closing of menu bar and nav bar
//const screenWindow = window.addEventListener('resize')

const menuBar = document.querySelector('.menu-bar');
const mobileNavbar = document.querySelector('.mobile-navbar');
const Links = document.querySelector('.link')
const [navIsOpen, setNavIsOPen] = useState(false);


  
 

  return (
    <div>
      <nav className="navigation-wrapper">
        <div className="action-button nav-top-button">
          <ActionButton actionButtonContent="info.kevin.co.ke" />
        </div>

        <div className="menu-bar"
          onClick={() => setNavIsOPen((prev) => !prev)}
         
        >
          <span className="line1"  style={{transform : navIsOpen? 'rotate(45deg) translateY(5px)' : 'rotate(0deg) translateY(0px)'}}></span>
          <span className="line2" style={{transform: navIsOpen? 'rotate(-45deg) translateY(-5px)' : 'rotate(0deg) translateY(0px)'}}></span>
        </div> 

        <ul className='mobile-navbar'
          style={{width : navIsOpen? '200px': '0px'}}
        >
          <Link className="link" to="/" style={{display : navIsOpen? 'flex': 'none'}}>
            <FaHome className="navbar-icon" /> Home
          </Link>
          <Link className="link projects-link" style={{display : navIsOpen? 'flex': 'none'}}>
            <FaTools className="navbar-icon"/> Projects 
          </Link>
          <Link className="link innovation-link" style={{display : navIsOpen? 'flex': 'none'}}>
            <FaBrain className="navbar-icon" /> Innovation 
          </Link>
          <Link className="link" style={{display : navIsOpen? 'flex': 'none'}}>
            <FaBookOpen className="navbar-icon" /> Thoughts
          </Link>

          <span className="get-in-touch-link" style={{display : navIsOpen? 'flex': 'none'}}>
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
