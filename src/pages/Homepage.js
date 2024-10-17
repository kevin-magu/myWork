import React from 'react'
import Navigation_c from '../components/Homepage_c/Navigation_c'
import HerosectionWrapper from '../components/Homepage_c/HerosectionWrapper'
import '../Styles/Homepage.css'

function Homepage() {
  return (
    <div>
        <div className='homepage-wrapper'>
          <Navigation_c />
          <HerosectionWrapper />
        </div>
    </div>
  )
}

export default Homepage