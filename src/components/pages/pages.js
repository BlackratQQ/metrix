import React, {useState} from 'react'
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/Hero";
import InfoSection from "../InfoSection/Info";
import {homeObjOne, homeObjThree, homeObjTwo} from "../InfoSection/Data";
import Services from "../Services/Services";
import Footer from "../Footer/Footer";

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