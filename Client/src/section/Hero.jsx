import { MenuIcon } from '../components/ui/menu-icon'
import React from 'react'
import Menu from './Menu';
import { useContext } from 'react';
import { MenuContext } from '../Context/MenuContext';

export default function Hero() {

  const {showMenu,setShowMenu} = useContext(MenuContext);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }
  return (

    <>
      {showMenu ? <Menu/> : <section className='home bg-black w-full h-screen' id='home'>
     <nav className='p-2 flex justify-between'>
      <h1 className='h1 text-6xl text-taupe-50'>G27</h1>
      <div onClick={toggleMenu}><MenuIcon color='white' size={60}/></div>
    </nav>
   </section>}
    </>
  )
}
