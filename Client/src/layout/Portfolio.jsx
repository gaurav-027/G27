import React from 'react'
import Hero from '../section/Hero'
import Word from '../section/Word'
import About from '../section/About'
import Signature from '../section/Signature'
import Project from '../section/Project'
import Message from '../section/Message'
import Skills from '../section/Skills'

export default function Portfolio() {
  return (
    <div className='overflow-hidden'>
        <p className='font-bold text-center text-2xl'>Website is Still Under Development...!</p>
        <Hero/>
        <Word/> 
        <About/>
        <Skills/>
        <Project/>
        <Signature/>
    </div>
  )
}
