import React from 'react'
import {motion} from "framer-motion";  
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Widget from './component/Widget'
import Slider from './component/Slider'
import './styles/Navbar.css'
import SmoothScroll from './Hook/SmoothScroll'
import  NavbarRouters  from "./routers/NavbarRouters"
export default function App() {

  return (
    <>
        <SmoothScroll>
      <Navbar/>
      <NavbarRouters/>
      <Slider/>
        <Footer/>
      <Widget/>
      </SmoothScroll>
    
     
    </>
  
  )
}
