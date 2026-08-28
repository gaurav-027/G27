import React from 'react'
import NotFound from './section/NotFound'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Portfolio from './layout/Portfolio'
import Project from './layout/Project'
import Contact from './layout/Contact'

export default function App() {

  return (
    <>
      <Router>
          <Routes>
            <Route path='/' element={<Portfolio />} />
            <Route path='/projects/:projectName' element={<Project />} />
            <Route path="/contactMe" element={<Contact />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
      </Router>
    </>
  )
}
