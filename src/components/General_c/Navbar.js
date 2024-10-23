import React, {useEffect} from 'react'
import ActionButton from './ActionButton'
import {Link,useNaviage} from "react-router-dom"
import { FaChevronDown } from 'react-icons/fa'

// innovation images 
import aiCardimage from '../../images/ai-card-image.jpg' 
import spaceCardImage from '../../images/space-card-image2.jpg'
import climateChangeImage from '../../images/other-card-image.jpg'

//icons from fa imorts
import { FaEnvelope } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaHouse } from 'react-icons/fa6';
import { FaTools } from 'react-icons/fa';
import { FaBrain } from 'react-icons/fa';
import { FaBookOpen } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';




function Navbar() {
  useEffect(() =>{
    //select get in touch link after component is mounted
   const getInTouch = document.querySelector('.get-in-touch-link');
   const contacts = document.querySelector('.contacts');
   const searchResults = document.querySelector('.search-results');
   const innovationLink = document.querySelector('.innovation-link');
   const projectsLink = document.querySelector('.projects-link');


  //define click function
  const handleClick = () =>{
    contacts.style.display = "flex"
  };

  getInTouch.addEventListener('click', handleClick)

   //close contacts when the document is clicked
   const handleContactClosing = (event) => {
    if(!contacts.contains(event.target) && (!getInTouch.contains(event.target))){
      contacts.style.display='none';
  }//else if(!searchResults.contains(event.target)&& (!searchResults.contains(event.target))){
    //   searchResults.style.display='none'
    // }
  };
  document.addEventListener('click', handleContactClosing)

  //projects , innovation clicking
  function handleProjectInnovationClick(){
    searchResults.style.display='block'
  }
  innovationLink.addEventListener('click', handleProjectInnovationClick);
  projectsLink.addEventListener('click', handleProjectInnovationClick);

  //clean up function to remove the event listener when the component unmounts
  return()=>{
    getInTouch?.removeEventListener('click', handleClick);
    document?.removeEventListener('click', handleContactClosing);
    innovationLink?.removeEventListener('click', handleProjectInnovationClick);
    projectsLink?.removeEventListener('click', handleProjectInnovationClick);
  };

  }, []);

  

 

  return (
    <div>
        <nav className='navigation-wrapper'>
        <div className='action-button nav-top-button'><ActionButton actionButtonConetent="info.kevin.co.ke" /></div>
          
          <div className='menu-bar'>
            <span className='line1'></span>
            <span className='line2'></span>
          </div>
          
            
            
            <ul>
              <Link className='link' to='/'> <FaHouse className='navbar-icon'/> Home</Link>
              <Link className='link'> <FaTools className='navbar-icon projects-link'/> Projects <FaChevronDown className='nav-dropdown'/> </Link>
              <Link className='link'> <FaBrain className='navbar-icon innovation-link'/> Innovation <FaChevronDown className='nav-dropdown'/> </Link>
              <Link className='link'> <FaBookOpen className='navbar-icon'/> Thoughts</Link>

              <span className='get-in-touch-link'>
                <span className='span-text'> <FaPhone className='navbar-icon'/> Get In Touch <FaChevronDown className='nav-dropdown'/> </span>
                <div className='contacts'>
                  <p> <FaEnvelope className='nav-icon'/> Email: info.kevin.co.ke</p>
                  <p> <FaPhone className='nav-icon'/> Call : 0797692537</p>
                  <p> <FaLinkedin className='nav-icon'/> Linkedin</p>
                </div>
              </span>
              {/* <Link className='link navbar-icon'> <FaSearch /> </Link> */}
              <div className='search-results-wrapper'></div>
              <div className='search-results'>
                <button className='result-close-button'>Close</button>

              </div>
            </ul>
        
        </nav>
    </div>
    
  )
  
}


export default Navbar