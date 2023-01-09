import React from 'react'
import hashtagIcon from '../images/hashtag-icon.png'

const Hashtag = (props) => {
  return (
    <div className='flex items-center mt-5'>
        <img className='w-10' src={hashtagIcon} alt='world-icon'/><span className='ml-3'>{props.text}</span>
    </div>
  )
}

export default Hashtag