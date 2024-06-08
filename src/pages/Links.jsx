import React from 'react'
import './Links.css'
import Li from '../components/Li'

import {
  FaDiscord,
  FaGithub
} from 'react-icons/fa6'

const Links = () => {
  return (
    <div className='linksContainer wrapper'>
      <Li icon={<FaGithub />} text="Git Hub" url="https://github.com/yuuta-kinoshi" target="_blank" />
      <Li icon={<FaDiscord />} text="Discord" />
      <Li icon={<FaGithub />} text="Git Hub" />
      <Li icon={<FaDiscord />} text="Discord" />
      <Li icon={<FaGithub />} text="Git Hub" />
      <Li icon={<FaDiscord />} text="Discord" />
      <Li icon={<FaGithub />} text="Git Hub" />
      <Li icon={<FaDiscord />} text="Discord" />
      <Li icon={<FaGithub />} text="Git Hub" />
      <Li icon={<FaDiscord />} text="Discord" />
      <Li icon={<FaGithub />} text="Git Hub" />
      <Li icon={<FaDiscord />} text="Discord" />
      <Li icon={<FaGithub />} text="Git Hub" />
      <Li icon={<FaDiscord />} text="Discord" />
    </div>
  )
}

export default Links
