import React from 'react'
import Top from '../../Components/Service/Top'
import Header from '../../Components/Service/Header'
import Newslatter from '../../Components/Home/Newslatter'
import Blog from '../../Components/Home/Blog'

const index = () => {
  return (
    <div>
        <Top/>
        <Header/>
        <Blog/>
        <Newslatter/>
    </div>
  )
}

export default index