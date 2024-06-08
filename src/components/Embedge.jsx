import React from 'react'
import './Embedge.css'

const Embedge = ({icon, technology, bgColor}) => {
  return (
    <div id='embedge' style={{background: bgColor, color: '#000'}}>
      {icon}
      <p>{technology}</p>
    </div>
  )
}

export default Embedge
