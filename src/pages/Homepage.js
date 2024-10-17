import React from 'react'
import Navigation_c from '../components/Homepage_c/Navigation_c'
import HerosectionWrapper from '../components/Homepage_c/HerosectionWrapper'
import '../Styles/Homepage.css'
import ProjectsSection from '../components/Homepage_c/ProjectsSection'

function Homepage() {
  return (
    <div>
        <div className='homepage-wrapper'>
          <Navigation_c />
          <HerosectionWrapper />
          <ProjectsSection />
        </div>
    </div>
  )
}

export default Homepage