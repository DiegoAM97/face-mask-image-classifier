import React, { useState } from 'react'

const NavbarMenu = () => {

    const values = [
        {id: 1, text: 'Home'},
        {id: 2, text: 'About'},
        {id: 3, text: 'Project'},
        {id: 4, text: 'Contact'},
      ];
    
    let [open, setOpen] = useState(false);

    return (
        <>
            <div className='basis-1/3 flex flex-wrap justify-end pr-4 sm:hidden'>
                    <span onClick={() => setOpen(prevState => !prevState)} className='cursor-pointer relative top-0.5'><ion-icon name={open ? 'close' : 'menu'}></ion-icon></span>
            </div>
            <ul className={`${open ? 'absolute w-full' : 'absolute opacity-0 left-[-5rem]'} text-center sm:left-0 top-[3rem] sm:top-0 sm:relative 
                                sm:basis-2/3 sm:flex sm:flex-wrap sm:justify-end sm:gap-12 sm:pr-8 sm:opacity-100 divide-y sm:divide-y-0`}>
                { 
                    values.map( value => {
                    return <li key={value.id} 
                    className='cursor-pointer bg-gray-700 sm:bg-transparent py-3 
                                sm:py-0 sm:hover:scale-125 hover:text-gray-400'>{value.text}</li>
                    })
                }
            </ul>
        </>
  )
}

export default NavbarMenu