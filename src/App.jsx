import React from 'react'
import Top from './Components/Top'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Welcome from './Components/Welcome'
import Services from './Components/Services'
import Gallery from './Components/Gallery'
import User from './Components/User'
import Pricing from './Components/Pricing'
import Experts from './Components/Experts'


const App = () => {
  return (
    <div>
     <Top/>
     <Navbar/>
     <Hero/>
     <Welcome/>
     <Services/>
     <Gallery/>
     <User/>
     <Pricing/>
     <Experts/>
    </div>
  )
}

export default App