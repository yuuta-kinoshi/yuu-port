import React from 'react'
import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact, FaSass } from 'react-icons/fa6'

import { useNavigate } from 'react-router-dom'

import './AboutMe.css'
import Button from '../components/Button'

const AboutMe = () => {

  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <div className='about-modal wrapper'>
      <h3>About me...</h3>
      <p>Hello, my name is Yuuta, and at 18 years old, I bring with me a passion for building bridges in the digital world. At the moment, I dedicate myself entirely to studies in front-end web development. Every day, I look for new challenges and opportunities to put what I learn into practice, improving my skills and expanding my horizons.</p>
      <div className="technology">
        {<FaHtml5 />}
        {<FaCss3 />}
        {<FaSass />}
        {<FaJs />}
        {<FaReact />}
        {<FaNodeJs />}
      </div>
      <button onClick={handleGoBack}>Ok</button>
    </div>
  )
}

export default AboutMe