import React from 'react'
import NotFound from './section/NotFound'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Portfolio from './layout/Portfolio'

export default function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path='/' element={<Portfolio />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
      </Router>
      
    </>
  )
}
