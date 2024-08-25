import React from 'react'
import './Links.css'
import Li from '../components/Li'

import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa6'

const Links = () => {
  return (
    <div className='linksContainer wrapper'>
      <Li icon={<FaGithub />} text="Git Hub" url="https://github.com/yuuta-kinoshi" target="_blank" />
      <Li icon={<FaDiscord />} text="Discord" url='https://discord.gg/yu5f88FkQj' target="_blank" />
      <Li icon={<FaYoutube />} text='YouTube' url="https://www.youtube.com/@yuutakinoshi" target="_blank" />
      <Li icon={<FaInstagram />} text='Instagram' url="https://www.instagram.com/yuuta_kinoshi/" target="_blank" />
    </div>
  )
}

export default Links
