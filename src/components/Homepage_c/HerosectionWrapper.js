import React from 'react'
import { MdWavingHand } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'
import ScrollDown from '../General_c/ScrollDown'

function HerosectionWrapper() {
  return (
    <div className='hero-section-wrapper'>
        <div className='hero-section1'>
            <div className='myPicture'>
            <div className='action-button'>Wanjau Kevin <MdWavingHand className='wave-icon'/> </div>
            </div>
        </div>
        <div className='hero-section2'>
            <p>Web Development, Design</p>
            <p>and Business Software</p>
            <p>Solutions .</p>
            <span> <FaGithub className='github-icon'/> </span>
        </div>

        <ScrollDown />
    </div>
  )
}

export default HerosectionWrapper