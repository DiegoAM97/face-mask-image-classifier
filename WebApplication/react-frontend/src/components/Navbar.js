import React, { useState } from 'react'

const Navbar = () => {

  //bg-gradient-to-r from-red-900 via-purple-900 to-indigo-800
  const values = [
    {id: 1, text: 'Home'},
    {id: 2, text: 'About'},
    {id: 3, text: 'Contact'},
  ];

  let [open, setOpen] = useState(false);

  return (
    <nav className='bg-black text-white h-12 text-lg flex flex-wrap content-center justify-start'>
        <div className='basis-2/3 sm:basis-1/3 pl-6'>
            <span className='cursor-pointer relative top-0.5'><ion-icon name="logo-ionitron"></ion-icon></span>
            <span className='cursor-pointer pl-2  italic'>Face Mask Classifier</span>
        </div>
        <div className='basis-1/3 flex flex-wrap justify-end pr-4 sm:hidden'>
            <span onClick={() => setOpen(!open)} className='cursor-pointer relative top-0.5'><ion-icon name={open ? 'close' : 'menu'}></ion-icon></span>
        </div>
        <ul className={`${open ? 'absolute w-full' : 'absolute opacity-0'} text-center left-0 top-[3rem] sm:top-0 sm:relative 
                          sm:basis-2/3 sm:flex sm:flex-wrap sm:justify-end sm:gap-14 sm:pr-10 sm:opacity-100 min-w`}>
          { 
            values.map( value => {
              return <li key={value.id} 
              className='cursor-pointer bg-gray-700 sm:bg-transparent py-3 
                          sm:py-0 sm:hover:scale-125 hover:text-gray-600'>{value.text}</li>
            })
          }
        </ul>
    </nav>
  )
}

export default Navbar