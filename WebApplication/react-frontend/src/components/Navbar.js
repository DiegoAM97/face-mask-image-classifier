import React from 'react'
import NavbarIcon from './NavbarIcon';
import NavbarMenu from './NavbarMenu';

const Navbar = () => {

  return (
    <nav className='bg-black text-white h-12 text-lg flex flex-wrap content-center justify-start'>
        <NavbarIcon/>
        <NavbarMenu/>
    </nav>
  )
}

export default Navbar