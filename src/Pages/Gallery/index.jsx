import React from 'react'
import Top from '../../Components/Service/Top'
import Header from '../../Components/Service/Header'
import Gallery from '../../Components/Home/Gallery'
import Newslatter from '../../Components/Home/Newslatter'

const index = () => {
  return (
    <div>
        <Top/>
        <Header/>
        <Gallery/>
        <Newslatter/>
    </div>
  )
}

export default index