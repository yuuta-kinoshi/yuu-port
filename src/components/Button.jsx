import React from 'react'

const Button = ({ url, text, blank }) => {

  blank ? blank = '_blank' : blank = ''

  return (
    <>
      <a href={url}  target={blank}>
        <button>{text}</button>
      </a>
    </>
  )
}

export default Button
