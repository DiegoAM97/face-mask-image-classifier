import React from 'react'
import { Link as ScrollLink } from 'react-scroll'

const Home = () => {
  return (
    <section id='Home'>
      <div className='py-32 text-center bg-intro'>
        <div className='p-5 text-xl sm:text-4xl text-white font-bold'>Welcome to the face mask image classifier</div>
        <div className='p-5 text-lg text-white font-semibold'>Implemented with Deep Learning</div>
        <button className='w-[8rem] mr-5 my-5 py-2 px-5 border-2 border-white rounded-lg text-white font-semibold hover:bg-white hover:text-gray-400'><ScrollLink to='About' smooth={true}>MORE</ScrollLink></button>
        <button className='w-[8rem] ml-5 my-5 py-2 px-5 border-2 border-white rounded-lg bg-white text-green-400 font-semibold hover:bg-green-400 hover:text-white hover:border-green-400'><ScrollLink to='Project' smooth={true}>PROJECT</ScrollLink></button>
      </div>
    </section>
  )
}

export default Home