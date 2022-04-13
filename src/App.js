import React from 'react'
import { Route, Routes } from "react-router-dom";
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Root Route */}
        <Route path="about" element={<About />} />
      </Routes>
    </>
  )
}

export default App