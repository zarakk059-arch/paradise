import React from 'react'
import Top from '../../Components/Service/Top'
import Header from '../../Components/Service/Header'
import Contact from '../../Components/Contact/Contact'
import Shop from '../../Components/Shop/Shop'
import Newslatter from '../../Components/Home/Newslatter'

const index = () => {
  return (
    <div>
        <Top/>
        <Header/>
        <Shop/>
        <Newslatter/>
    </div>
  )
}

export default index