import React from 'react'
import { MenuProvider } from '../Context/MenuContext'
import Hero from '../section/Hero'
import Word from '../section/Word'
import About from '../section/About'
import Signature from '../section/Signature'
import Project from '../section/Project'
import String from '../components/String'

export default function Portfolio() {
  return (
    <div className='overflow-hidden'>
        {/* <MenuProvider>
            <Hero/>
        </MenuProvider>
        <Word/> */}
        {/* <String/> */}
        <About/>
        {/* <Project/>
        <Signature/> */}
    </div>
  )
}
