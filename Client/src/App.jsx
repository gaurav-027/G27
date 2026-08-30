import React from 'react'
import NotFound from './section/NotFound'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Portfolio from './layout/Portfolio'
import Project from './layout/Project'
import Contact from './layout/Contact'
import Loading from './layout/Loading'
import { useState,useRef } from 'react'

export default function App() {

  const [showLoader, setShowLoader] = useState(true);
  const contentRef = useRef(null);

    const handleLoaderComplete = () => {
    setShowLoader(false);
 
    // Slight "page comes up" reveal once the loader is gone
    gsap.fromTo(
      contentRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
  };

  return (
    <>
    {showLoader && <Loading onComplete={handleLoaderComplete} />}
    <div ref={contentRef}>
      <Router>
          <Routes>
            <Route path='/' element={<Portfolio />} />
            <Route path='/projects/:projectName' element={<Project />} />
            <Route path="/contactMe" element={<Contact />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/l' element={<Loading />} />
          </Routes>
      </Router>
    </div>
    </>
  )
}
