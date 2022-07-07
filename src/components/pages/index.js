import React, {useState} from 'react'
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import InfoSection from "../InfoSection";
import {homeObjOne} from "../InfoSection/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen)
  }
  return (
   <div>
     <Sidebar isOpen={isOpen} toggle={toggle}/>
     <Navbar toggle={toggle}/>
     <HeroSection/>
     <InfoSection {...homeObjOne}/>
   </div>
 )
}

export default Home;