import React, {useState} from 'react'
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import InfoSection from "../InfoSection";
import {homeObjOne, homeObjThree, homeObjTwo} from "../InfoSection/Data";
import Services from "../Services";
import Footer from "../Footer";

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
     <InfoSection {...homeObjTwo}/>
     <InfoSection {...homeObjThree}/>
     <Services/>
     <Footer/>
   </div>
 )
}

export default Home;