import React from 'react'
import HerosectionWrapper from '../components/Homepage_c/HerosectionWrapper'
import '../Styles/Homepage.css'
import ProjectsSection from '../components/Homepage_c/ProjectsSection'
import ScrollDown from '../components/General_c/ScrollDown'
import InnovationSection from '../components/Homepage_c/InnovationSection'
import LetsCollaborate from '../components/Homepage_c/LetsCollaborate'

function Homepage() {
  return (
    <div>
        <div className='homepage-wrapper'>
          <HerosectionWrapper />
          <ScrollDown />
          <ProjectsSection />
          <InnovationSection />
          <LetsCollaborate />
        </div>
    </div>
  )
}

export default Homepage