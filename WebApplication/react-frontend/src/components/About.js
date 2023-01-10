import React from 'react'
import Hashtag from './Hashtag'

const About = () => {
  return (
    <section id='About' className='p-10 gap-4 grid gird-cols-1 sm:grid-cols-2'>
        <div>
            <p className='text-green-400 font-semibold text-lg pb-2'>ABOUT THE PROJECT</p>
            <p className='font-bold text-xl'>Learn about artificial intelligence</p>
            <div className='text-gray-700 text-sm font-serif font-semibold lg:grid lg:grid-cols-2'>
                <Hashtag text='MACHINE LEARNING'/>
                <Hashtag text='DEEP LEARNING'/>
                <Hashtag text='CONVOLUTIONAL'/>
                <Hashtag text='CLASSIFY'/>
            </div>
        </div>
        <div className='text-gray-400 text-sm'>
            <p className='mt-3 sm:mt-10 mb-5'>
                Artificial intelligence is one of the booming topics and 
                has solved problems that seemed impossible to solve.
            </p>
            <p className='mb-5'>
                The model is built under the architecture of a convolutional neural network, 
                a type of neural network that has revolutionized artificial vision, 
                allowing to solve complex problems such as object classification or detection.
            </p>
            <p>
                You want to classify 3 types of images: <br/>
                    -Person without mask <br/>
                    -Person with mask <br/>
                    -Person with the mask incorrectly placed
            </p>
        </div>
    </section>
  )
}

export default About