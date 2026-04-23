import React from 'react'
import Top from '../../Components/Service/Top'
import Header from '../../Components/Service/Header'
import Main from '../../Components/Pagess/Main'
import Experts from '../../Components/Home/Experts'
import User from '../../Components/Home/User'
import Appointment from '../../Components/Home/Appointment'
import Newslatter from '../../Components/Home/Newslatter'

const index = () => {
  return (
    <div>
<Top/>
<Header/>
<Main/>
<Experts/>
<User/>
<Appointment/>
<Newslatter/>

    </div>
  )
}

export default index