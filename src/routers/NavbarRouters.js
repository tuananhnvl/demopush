import React from 'react'
import { Routes, Route,useLocation } from 'react-router-dom'
import  Home  from ".././page/Home";
import  Aboutus  from ".././page/Aboutus";
import  Newfeed  from ".././page/Newfeed";
import  Contact  from ".././page/Contact";
import  Partners  from ".././page/Partners";
import {AnimatePresence} from "framer-motion";  
import Modal from '.././component/Modal'

export default function NavbarRouters() {
    const location = useLocation();

  return (
  <>
   
      <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/aboutus' element={<Aboutus/>}></Route>
          <Route path='/partners' element={<Partners/>}></Route>
          <Route path='/newfeed' element={<Newfeed/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>

 </>
  )
}
