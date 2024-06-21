import React from 'react'
import './Embedge.css'

const Embedge = ({icon, technology, bgColor}) => {
  return (
    <div id='embedge' style={{background: bgColor}}>
      {icon}
      <p>{technology}</p>
    </div>
  )
}

export default Embedge
