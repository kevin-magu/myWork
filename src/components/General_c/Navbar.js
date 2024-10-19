import React, {useEffect} from 'react'
import ActionButton from './ActionButton'


function Navbar() {
  return (
    <div>
        <nav className='navigation-wrapper'>
            <ActionButton actionButtonConetent="info.kevin.co.ke" />
            <ul>
              <li>Home</li>
              <li>Projects</li>
              <li>Innovation</li>
              <li className='get-in-touch-link'>Get In Touch</li>
            </ul>
        </nav>
    </div>
    
  )
  
}


export default Navbar