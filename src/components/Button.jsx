import React from 'react'

const Button = ({ url, text, blank, type, width, maxWidth }) => {

  blank ? blank = '_blank' : blank = ''

  return (
    <>
      <a href={url} target={blank}>
        <button style={{width: width, maxWidth: maxWidth}} type={type}>{text}</button>
      </a>
    </>
  )
}

export default Button
