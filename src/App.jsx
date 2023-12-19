import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home'
function App() {


  return (
    <>
      <nav className='navbar'>
          <Link to='/' className='nav-link'>home</Link>
      </nav>


      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </>
  )
}

export default App
