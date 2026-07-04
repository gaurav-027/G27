import React from 'react'
import NotFound from './section/NotFound'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Portfolio from './layout/Portfolio'
import Project from './layout/Project'
import Demo1 from './section/Demo1'
import Demo2 from './section/Demo2'

export default function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path='/' element={<Portfolio />} />
            <Route path='/projects/:projectName' element={<Project />} />
            <Route path='/demo1' element={<Demo1/>}/>
            <Route path='/demo2' element={<Demo2/>}/>
            <Route path='*' element={<NotFound />} />
          </Routes>
      </Router>
      
    </>
  )
}
