import React from 'react'
import { MenuProvider } from '../Context/MenuContext'
import Hero from '../section/Hero'
import Menu from '../section/Menu'
import Word from '../section/Word'
import About from '../section/About'
import Signature from '../section/Signature'

export default function Portfolio() {
  return (
    <>
        <MenuProvider>
            <Hero/>
        </MenuProvider>
        <Word/>
        <About/>
        <Signature/>
    </>
  )
}
