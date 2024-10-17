import React from 'react'
import ActionButton from '../General_c/ActionButton'

function Navigation_c() {
  return (
    <div>
        <nav className='navigation-wrapper'>
            <ActionButton />
            <ul>
              <li>Home</li>
              <li>Projects</li>
              <li>Innovation</li>
              <li>Get In Touch</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navigation_c