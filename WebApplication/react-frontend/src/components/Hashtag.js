import React from 'react'
import worldIcon from '../images/test.png'

const Hashtag = (props) => {
  return (
    <div className='flex items-center mt-5'>
        <img className='w-10' src={worldIcon} alt='world-icon'></img><span className='ml-3'>{props.text}</span>
    </div>
  )
}

export default Hashtag