import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Project from './pages/project/Project'
import Contact from './pages/contact/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Themes from './components/Themes'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Themes />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
