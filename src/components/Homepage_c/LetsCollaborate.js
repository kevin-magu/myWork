import React from 'react'
import SectionTitles from '../General_c/SectionTitles'
import ActionButton from '../General_c/ActionButton'
import { FaHandshake } from 'react-icons/fa'

function LetsCollaborate() {
  return (
    <div className='lets-collaborate-wrapper'>
        <SectionTitles title ="Let's Collaborate"/>
        <FaHandshake className='handshake-icon'/>
        <div className='action-button-wrapper'>
            <ActionButton actionButtonConetent="Email"/>
            <ActionButton actionButtonConetent="Whatsapp"/>
            <ActionButton actionButtonConetent="call"/>
        </div>
    </div>
  )
}

export default LetsCollaborate