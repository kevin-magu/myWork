import React, {useEffect} from 'react'
import ActionButton from './ActionButton'
import {Link,useNaviage} from "react-router-dom"

//icons from fa imorts
import { FaEnvelope } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';



function Navbar() {
  useEffect(() =>{
    //select get in touch link after component is mounted
   const getInTouch = document.querySelector('.get-in-touch-link')
   const contacts = document.querySelector('.contacts')

  //define click function
  const handleClick = () =>{
    contacts.style.display = "flex"
  };
  getInTouch.addEventListener('click', handleClick)

   //close contacts when the document is clicked
   const handleContactClosing = (event) => {
    if(!contacts.contains(event.target) && (!getInTouch.contains(event.target))){
      contacts.style.display='none';
    }
  };
  document.addEventListener('click', handleContactClosing)

  //clean up function to remove the event listener when the component unmounts
  return()=>{
    getInTouch?.removeEventListener('click', handleClick);
    document?.removeEventListener('click', handleContactClosing)
  };

  

  }, []);
 

  return (
    <div>
        <nav className='navigation-wrapper'>
            <ActionButton actionButtonConetent="info.kevin.co.ke" />
            <ul>
              <Link className='link' to='/'>Home</Link>
              <Link className='link'>Projects</Link>
              <Link className='link'>Innovation</Link>

              <span className='get-in-touch-link'>
                <span className='span-text'>Get In Touch </span>
                <div className='contacts'>
                  <p> <FaEnvelope className='nav-icon'/> Email: info.kevin.co.ke</p>
                  <p> <FaPhone className='nav-icon'/> Call : 0797692537</p>
                  <p> <FaLinkedin className='nav-icon'/> Linkedin</p>
                </div>
              </span>

            </ul>
        </nav>
    </div>
    
  )
  
}


export default Navbar