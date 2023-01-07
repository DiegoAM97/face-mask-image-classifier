import React from 'react'

const ContactSection = (props) => {
  return (
    <div className='flex items-center mt-5'>
        <img className='w-10' src={props.image} alt='world-icon'/><span className='ml-3'>{props.text}</span>
    </div>
  )
}

export default ContactSection