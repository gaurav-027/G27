import React from 'react'
import FuzzyText  from '../components/FuzzyText.jsx';

export default function NotFound() {
  return (
    <div className='w-full h-screen bg-black flex items-center justify-center '>
       <FuzzyText 
  baseIntensity={0.2}
  hoverIntensity={0.5}
  enableHover
>
  404
</FuzzyText>
    </div>
  )
}
