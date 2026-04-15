import React from 'react'
import Top from './Components/Top'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Welcome from './Components/Welcome'
import Services from './Components/Services'


const App = () => {
  return (
    <div>
     <Top/>
     <Navbar/>
     <Hero/>
     <Welcome/>
     <Services/>
    </div>
  )
}

export default App