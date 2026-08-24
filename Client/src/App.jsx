import React from 'react'
import NotFound from './section/NotFound'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Portfolio from './layout/Portfolio'
import Project from './layout/Project'
import { QRCodeCanvas } from "qrcode.react";

export default function App() {

  return (
    <>
      <Router>
          <Routes>
            <Route path='/' element={<Portfolio />} />
            <Route path='/projects/:projectName' element={<Project />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
      </Router>
    </>
  )
}
