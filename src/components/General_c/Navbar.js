import React, {useEffect} from 'react'
import ActionButton from './ActionButton'
import { FaEnvelope } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';



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

  //clean up function to remove the event listener when the component unmounts
  return()=>{
    getInTouch?.removeEventListener('click', handleClick);
  }

  }, []);

  return (
    <div>
        <nav className='navigation-wrapper'>
            <ActionButton actionButtonConetent="info.kevin.co.ke" />
            <ul>
              <li>Home</li>
              <li>Projects</li>
              <li>Innovation</li>

              <span className='get-in-touch-link'>
                <span className='span-text'>Get In Touch </span>
                <div className='contacts'>
                  <p> <FaEnvelope /> Email: info.kevin.co.ke</p>
                  <p> <FaPhone /> Call : 0797692537</p>
                </div>
              </span>

            </ul>
        </nav>
    </div>
    
  )
  
}


export default Navbar