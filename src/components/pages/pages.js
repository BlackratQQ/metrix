import React, {useState} from 'react'
import Sidebar from "../Header/Sidebar/Sidebar";
import Navbar from "../Header/Navbar/Navbar"
import HeroSection from "../HeroSection/Hero";
import InfoSection from "../InfoSection/Info";
import {homeObjOne, homeObjThree, homeObjTwo} from "../InfoSection/Data";
import Services from "../Services/Services";
import Footer from "../Footer/Footer";
import Sponsors from "../Sponsors/Sponsors";
import Coaches from "../Coaches/Coaches";
import Athletes from "../Athletes/Athletes";
import Wallpaper from "../Header/Wallpaper/Wallpaper";

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
     <Wallpaper/>
     <Athletes/>
     <Coaches/>
     <Sponsors/>
   </div>
 )
}

export default Home;