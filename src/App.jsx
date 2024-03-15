import React from 'react'
import Navbar from './components/Navbar'
import { Landing } from './components/Landing'
import { Marque } from './components/Marque'

const App = () => {
  return (
    <div className='w-full h-screen bg-white text-black'>
      <Navbar/>
      <Landing/>
      <Marque/>
    </div>
  )
}

export default App