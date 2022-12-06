import React,{useState} from 'react'
import {Link } from 'react-router-dom'
import LogoLBTCompany from '.././asset/lbt-logo-old.jpg'
import {FaTimes} from 'react-icons/fa'


export default function Navbar() {
    const [isActive, setIsActive] = useState(false);
  
    function openModalMobi() {
      
        setIsActive(current => !current);

    }
  return (
    <div className="nav">
  
    <div className="nav-header">
        <Link to="/"><img src={LogoLBTCompany} alt="Logo LBT Company" /></Link>
    </div>
    <div className="nav-btn">
      <button  onClick={openModalMobi}>
        <FaTimes/>
      </button>
    </div>
    
    <div className={isActive ? 'active-mobi nav-links' : 'nav-links'}>
      <div><Link to="/">Home</Link></div>
      <div><Link to="/aboutus">About us</Link></div>
      <div><Link to="/partners">Partner - Farm</Link></div>
      <div><Link to="/newfeed">Newfeed</Link></div>
      <div><Link to="/contact">Contact</Link></div>
    </div>
  </div>
  )
}
