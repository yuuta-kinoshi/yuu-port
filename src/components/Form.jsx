import React from 'react'

import './Form.css'
import Button from './Button'

import emailjs from '@emailjs/browser'

const Form = () => {

  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')

  function handleForm(e) {
    e.preventDefault()

    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields')
      return;
    }

    const templateParms = {
      from_name: name,
      from_email: email,
      message: message
    }

    emailjs.send("service_eecfdp9", "template_7ht6qk8", templateParms, "sSmwynXt0i8PVwbiv")
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!')
        setName('')
        setEmail('')
        setMessage('')
      }, (err) => {
        console.log('FAILED...', err);
        alert('Failed to send message. Please try again later')
      })

  }

  return (
    <>
      <form id='emailSubmit' onSubmit={handleForm}>
        <input className='globalForm' placeholder='Name' type="text" name='name' value={name} onChange={(event) => setName(event.target.value)} />
        <input className='globalForm' placeholder='Email' type="email" name='email' value={email} onChange={(event) => setEmail(event.target.value)} />
        <textarea type="text" name='message' placeholder='Message' value={message} onChange={(event) => setMessage(event.target.value)} />
        <p style={{ fontSize: '0.8em' }}>I needs the contact information you share with me to send you information about my services. If you no longer wish to receive these communications, simply request it.</p>
        <Button maxWidth='95%' width='95%' type='submit' text='Submit' />
      </form>
    </>
  )
}

export default Form
