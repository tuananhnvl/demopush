import {useEffect, useRef, useState,useLayoutEffect} from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'
import ".././styles/Home.css"
import gsap from 'gsap'
import {Power3} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import Modal from '../component/Modal'
import img03 from '../asset/demo-img/03.jpg'
import img05 from '../asset/demo-img/05.jpg'

gsap.registerPlugin(ScrollTrigger,CSSRulePlugin);
function Home() {



  const pageMotion = {
    initial: { opacity: 0, x: 0 },
    animate: { opacity: 1, x: 0, transition: { duration: 1 } },
    exit: { opacity: 0, x: 0, transition: { duration: 1 } }
  };
  const text1 = useRef()
  const text2 = useRef()
  const text3 = useRef()
  const text4 = useRef()

  const image03move = useRef()
  const image05move = useRef()

  const scrolltrig = useRef();
  const elementAll = useRef();
  const containerImageMove = useRef();
  let imageReveal = CSSRulePlugin.getRule(".custom-imgbanner--dgnxg:after");

  //console.log(imageReveal)
  //console.log(containerImageMove)

  const timeline_home = gsap.timeline();
  useEffect(() => {
    const eldom = elementAll.current;
   // console.log(eldom)
    let tl = gsap.timeline({scrollTrigger:{
      trigger:eldom.querySelector(".main-short-about"),
      start:"center center",
      end:"+=300",
      markers:true,
      toggleActions:"play none none reverse"
    }}) 
    .from(eldom.querySelector(".main-h1-short-about"), {x:100, duration:1,ease:"power1.out"})


  })

  useEffect(() => {
  const timer = setTimeout(() => {
    console.log(image05move)
      timeline_home.to([text1.current,text2.current], {
        duration: 1,
        y: -10,
        stagger: {
            amount:.2
        }
      }).to(imageReveal, 1.5, {width:"0%",ease:Power3.easeOut})
      .to([image05move.current,image03move.current],  1.5,  {scale:1.5,ease:Power3.easeOut,delay:-1.6})
     

      timeline_home.to([text3.current,text4.current], {
        duration: 1,
        skewY: '-15deg',
        y: -10,
  
        stagger: {
            amount: .2
        }
      })
    
      timeline_home.to([image03move.current], {
        duration: 1,
        x: 0,
      })
 
  
  }, 200);
  return () => clearTimeout(timer);

},[])

  
  return (
    <>
      <motion.div initial="initial" animate="animate" exit="exit" variants={pageMotion}>
      <Modal/>

        <div className="container">
          <div className="container1">
            <div className="txt-line" id='taimoor'>
              <p ref={text1}>WELCOME</p>
            </div>
            <div className="txt-line line-bottom" id="shahzada">
              <p ref={text2}>LBT COMPANY</p>
            </div>
          </div>
          <div className='custom-imgbanner--dgnxg' >
            <img src={img03} alt=''  ref={image03move}/>
          </div>
        </div>
      
        <div className="container">
          <div ref={containerImageMove} className='custom-imgbanner--dgnxg'>
            <img ref={image05move} src={img05} alt='' />
          </div>
          <div className="container1">
            <div className="txt-line" id="digital">
              <p ref={text3}>Digital</p>
            </div>
            <div className="txt-line line-bottom" id="designer">
              <p ref={text4}>Designer</p>
            </div>
          </div>
          
        </div>
        
        <div className="short-about" ref={elementAll}>
          <div className="main-h1-short-about">
            <h1 className="main-short-about">
              Shortly
            </h1>
            <h1 className='main-short-about'>
              About
            </h1>
            <h1 className="main-short-about">
              MySelf!
            </h1>
          </div>
          <div className="sub-main-p-short-about">
            <p className="sub-main-short-about">
              I BELIEVE THAT EVERY PROJECT THAT I DO SHOULD HAVE AN OVERVALUE.
            </p>
            <p className="sub-main-short-about">
              I ALWAYS TRY TO FIND THE OPTIMAL SOLUTION TO THE CLIENT'S TASK.
            </p>
          </div>
         
        </div>
        <div className="my-skills-main-reel">
          <div className="my-skills-reel" id="skill-reel">
            <div className="reel-item">&nbsp; -- My skills</div>
            <div className="reel-item">&nbsp; -- My skills</div>
            <div className="reel-item">&nbsp; -- My skills</div>
            <div className="reel-item">&nbsp; -- My skills</div>
            <div className="reel-item">&nbsp; -- My skills</div>
            <div className="reel-item">&nbsp; -- My skills</div>
            <div className="reel-item">&nbsp; -- My skills</div>
            <div className="reel-item">&nbsp; -- My skills</div>
            <div className="reel-item">&nbsp; -- My skills</div>
            <div className="reel-item">&nbsp; -- My skills</div>
          </div>
          <div className="skill-set-boxes">
            <div className="skill-set-box">
              <h1 className="skill-set-box-h1">HTML5</h1>
              <p className="skill-set-box-p">I mainly used to develop Website Markup</p>
              <p>___</p>
            </div>
            <div className="skill-set-box">
              <h1 className="skill-set-box-h1">CSS3</h1>
              <p className="skill-set-box-p">I use this to style and bring design to browsers</p>
              <p>___</p>
            </div>
            <div className="skill-set-box">
              <h1 className="skill-set-box-h1">javascript</h1>
              <p className="skill-set-box-p">With this technology i create visual effects and interaction and DOM elements</p>
              <p>___</p>
            </div>
            <div className="skill-set-box">
              <h1 className="skill-set-box-h1">React.js</h1>
              <p className="skill-set-box-p">I loved it! I use it to create applications that have lot of reactivity</p>
              <p>___</p>
            </div>
            <div className="skill-set-box">
              <h1 className="skill-set-box-h1">Greensock - GSAP</h1>
              <p className="skill-set-box-p">I used this as an animation library, The most loved ones!</p>
              <p>___</p>
            </div>
            <div className="skill-set-box">
              <h1 className="skill-set-box-h1">Three.js</h1>
              <p className="skill-set-box-p">This library deals and simplifies the working with webgl and glsl</p>
              <p>___</p>
            </div>
            <div className="skill-set-box">
              <h1 className="skill-set-box-h1">Sass</h1>
              <p className="skill-set-box-p">I prefer this also instead of CSS beacouse of advance functionalities</p>
              <p>___</p>
            </div>
            <div className="skill-set-box">
              <h1 className="skill-set-box-h1">Node.js</h1>
              <p className="skill-set-box-p">I use it to writing server scripting for applications</p>
              <p>___</p>
            </div>

            <div className="skill-set-box">
              <h1 className="skill-set-box-h1">Photoshop</h1>
              <p className="skill-set-box-p">Use to edit photos or prototype any website design</p>
              <p>___</p>
            </div>

            <div className="skill-set-box">
              <h1 className="skill-set-box-h1">Illustrator</h1>
              <p className="skill-set-box-p">I use to make creative svgs and illustrations for website</p>
              <p>___</p>
            </div>
          </div>
          <div className="project-and-work">
            <h1>
              <Link className="h1-project" to="/aboutus">
                My Projects and Works
              </Link>
            </h1>
            <br />
            <p>Click me!</p>
          </div>
        </div>
      </motion.div>

    </>
  )
}
export default Home;
