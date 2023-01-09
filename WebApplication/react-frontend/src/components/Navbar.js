import React, {useEffect, useState} from 'react'
import NavbarIcon from './NavbarIcon';
import NavbarMenu from './NavbarMenu';

const Navbar = () => {

  const [fixed, setFixed] = useState(false);
  const [actualScroll, setActualScroll] = useState(0);

  const controlNavBar = () => {

    if (window.scrollY === 0)
      setFixed(false);
    else if (Math.abs(window.scrollY - actualScroll) > 10)  { // To prevent a rude placement of the navbar
      if (actualScroll < window.scrollY) 
        setFixed(false);
      else 
        setFixed(true);
    }
    setActualScroll(window.scrollY);
  }
  
  useEffect(() => {

    window.addEventListener('scroll', controlNavBar)

    return () => window.removeEventListener('scroll', controlNavBar)

  })
  

  return (
    <nav className={`bg-black text-white h-12 text-lg flex flex-wrap content-center justify-start ${fixed ? 'fixed w-full' : ''}`}>
        <NavbarIcon/>
        <NavbarMenu/>
    </nav>
  )
}

export default Navbar