import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import SplashCursor from '../components/SplashCursor'
import { MenuIcon } from '../components/ui/menu-icon'

export default function Hero() {

  useGSAP(()=>{
    const main = document.querySelector(".section");

    main?.addEventListener("mousemove",(e)=>{
      const X = (e.clientX / window.innerWidth - 0.5) *40;
          const Y = (e.clientY / window.innerHeight - 0.5) *30;
      gsap.to(".sky",{
        x:X,
        y:Y,
        ease: "power2.out"
      })

      gsap.to(".bg",{
        x:-X,
        y:-Y,
        ease: "power2.out"
      })
      
  })

})
  return (
    <>
    {/* <SplashCursor
      DENSITY_DISSIPATION={3}
      VELOCITY_DISSIPATION={2}
      PRESSURE={0.1}
      CURL={3}
      SPLAT_RADIUS={0.06}
      SPLAT_FORCE={6000}
      COLOR_UPDATE_SPEED={10}
      SHADING
      RAINBOW_MODE={false}
      COLOR="#FFE08A"
    /> */}
    <section className='section w-screen h-screen relative overflow-hidden'>
      <div className='flex justify-between items-center p-7'>
        <h1 className='h1 relative z-30 text-white text-6xl '>G27</h1>
        <div className='relative z-30'><MenuIcon color="#ffffff" size={70}/></div>
      </div>

     <div className='sky scale-[1.1] w-full h-full absolute top-0 left-0'>
      <img src="2.png" className='w-full h-full' alt="" />
     </div>
     <div className='bg scale-[1.1] absolute top-0 w-full h-full'>
      <img src="OBG.svg" className='object-cover w-full h-full' alt="" />
     </div>
     
    </section>
    </>
  )
}

