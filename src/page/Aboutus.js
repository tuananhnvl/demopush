import React from 'react'
import {motion} from "framer-motion";  
import { Link } from 'react-router-dom'
    function Aboutus() {
      console.log('run')
        const pageMotion = {
          initial: { opacity: 0, x: 0 },
          animate: { opacity: 1, x: 0, transition: { duration: 1 } },
          exit: { opacity: 0, x: 0, transition: { duration: '300s' } }
        };
    
        return (
          <>
              <motion.div initial="initial" animate="animate" exit="exit" variants={pageMotion}><h1>Aboutt us</h1></motion.div>
              <Link to="/">Go to home page</Link>
          </>
      )
}
export default Aboutus;
