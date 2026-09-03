import { useEffect } from "react";
import Hero from '../section/Hero'
import Word from '../section/Word'
import About from '../section/About'
import Signature from '../section/Signature'
import Project from '../section/Project'
import Skills from '../section/Skills'
import BuildSection from '../section/BuildSection'
import Lenis from "lenis";

export default function Portfolio() {

  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      duration: 1.2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className='overflow-hidden'>
        <Hero/>
        <Word/> 
        <About/>
        <Skills/>
        <Project/>
        <BuildSection/>
        <Signature/>
    </div>
  )
}
