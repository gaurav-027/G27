import React from 'react'
import Ribbons from './components/Ribbons'
import Hero from './section/Hero'

export default function App() {
  return (
    <div className='h-screen w-screen relative'>
      <div className='h-full bg-transparent absolute top-0 left-0 w-full'>
       <Ribbons
    baseThickness={10}
    colors={["#5227FF"]}
    speedMultiplier={0.5}
    maxAge={500}
    enableFade={false}
    enableShaderEffect={false}
  />
      </div>
      <div>
        <Hero/>
      </div>
    </div>
  )
}
