import React from 'react'
import Navbar from './components/Navbar'
import { Landing } from './components/Landing'
import { Marque } from './components/Marque'
import { About } from './components/About'

const App = () => {
  return (
    <div className='w-full h-screen bg-white text-black'>
      <Navbar/>
      <Landing/>
      <Marque/>
      <About/>
    </div>
  )
}

export default App