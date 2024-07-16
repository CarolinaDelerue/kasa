import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LocationDetails from './pages/LocationDetails'

function App () {
  return (
    <Router>
      <div className="global-container">
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/location/:id" element={<LocationDetails />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
