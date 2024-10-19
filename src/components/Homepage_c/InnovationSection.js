import React from 'react'
import SectionTitles from '../General_c/SectionTitles'
import aiCardimage from '../../images/ai-card-image.jpg' 
import spaceCardImage from '../../images/space-card-image2.jpg'
import climateChangeImage from '../../images/other-card-image.jpg'

function InnovationSection() {
  return (
    <div className='innovation-section-wrapper'>
        <SectionTitles title="Research & Innovation"/>
        <div className='specific-innovation-wrapper'>
          <div className='ai-card card'>

            <div className='card-image'>
              <img src={aiCardimage} alt="" />
              <p className='card-title'>Artificial Inteligence</p>
            </div>
            <div className='card-description'>
              <p>AI is the next bitcoin. Yes, the next thing that will
                hit the world with shock. Those who will survive the 
                future are those who won't live in denial of having AI do most of their tasks.
          
              </p>
              <a href="">Read more</a>
            </div>

          </div>

           <div className='space-card card'>
            <div className='card-image'>
              <img src={spaceCardImage} alt="" />
              <p className='card-title'>Space Exploration</p>
            </div>
            <div className='card-description'>
              <p>We were born to achieve something in this world.Right?
                Why not be among those who'll make Kenya launch its first Rocket into orbit?
              </p>
              <a href="">Read more</a>
            </div>
          </div>

          <div className='other-card card'>
            <div className='card-image'>
              <img src={climateChangeImage} alt="" />
              <p className='card-title'>Other</p>
            </div>
            <div className='card-description'>
              <p>Stay indoors? No. I like doing something for the world. Combating climate change is the best
                field where you can learn earth science and make the world a better place at the same time.
                
              </p>
              <a href="">Read more</a>
            </div>
          </div>

        </div>
    </div>
  )
}

export default InnovationSection