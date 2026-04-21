import React from "react";
import Top from "../../Components/Home/Top"; 
import Navbar from "../../Components/Home/Navbar"; 
import Hero from "../../Components/Home/Hero"; 
import Welcome from "../../Components/Home/Welcome"; 
import Services from "../../Components/Home/Services"; 
import Gallery from "../../Components/Home/Gallery"; 
import User from "../../Components/Home/User"; 
import Pricing from "../../Components/Home/Pricing"; 
import Experts from "../../Components/Home/Experts"; 
import Appointment from "../../Components/Home/Appointment"; 
import Blog from "../../Components/Home/Blog"; 
import Newslatter from "../../Components/Home/Newslatter"; 



const Home = () => {
  return (
    <div>
      <Top />
      <Navbar/>
      <Hero/>
      <Welcome/>
      <Services/>
      <Gallery/>
      <User/>
      <Pricing/>
      <Experts/>
      <Appointment/>
      <Blog/>
      <Newslatter/>
    </div>
  );
};

export default Home;