import React from 'react'
import SectionTitles from '../General_c/SectionTitles'
import { FaGlobe, FaLink, FaDesktop, FaPaintBrush } from 'react-icons/fa'


function ProjectsSection() {
  return (
    <div className='projects-section-wrapper'>
        <SectionTitles title="Projects"/>
        <div className='specific-projects-wrapper'>
            <div className='web-projects specific-project'>
                <ul>
                    <div className='project-title-wrapper'>
                    <li className='project-category-title'> <FaGlobe /> Websites</li>
                    </div>
                    <li> <FaLink /> greengloberealisation.org</li>
                    <li> <FaLink /> Madinafc.co.ke</li>
                    <li> <FaLink /> futuresoft.co.ke</li>
                </ul>
            </div>
            <div className='business-software-projects specific-project'>
                <ul>
                    <div className='project-title-wrapper'>
                        <li className='project-category-title'> <FaDesktop /> Business Software</li>
                    </div>
                    <li> <FaLink /> safiri.com</li>
                    <li> <FaLink /> Hotelchain.co.ke</li>
                    <li> <FaLink /> pinkybabyshop.co.ke</li> 
                </ul>
            </div>
            <div className='design-projects specific-project'>
                <ul>
                    <div className='project-title-wrapper'>
                    <li className='project-category-title'> <FaPaintBrush /> Design</li>
                    </div>
                    <li> <FaLink /> Logos</li>
                    <li> <FaLink /> Posters</li>
                    <li> <FaLink /> Websites</li> 
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ProjectsSection