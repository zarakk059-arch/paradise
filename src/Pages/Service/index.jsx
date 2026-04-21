import React from 'react'
import Top from "../../Components/Service/Top"
import Header from "../../Components/Service/Header"
import OurService from '../../Components/Service/OurService'
import Appointment from '../../Components/Home/Appointment'
import Newslatter from '../../Components/Home/Newslatter'

const index = () => {
  return (
    <div>
    <Top/>
    <Header/>
    <OurService/>
<Appointment/>
<Newslatter/>
    </div>
  )
}

export default index