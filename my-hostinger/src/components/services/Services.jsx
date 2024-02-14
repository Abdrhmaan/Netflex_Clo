import React, { useContext } from 'react'

import "./service.css"
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import bkacl from "../../img/Black Gradient Creative Web Designer Resume.png";

import Crad from '../card/Crad';

import { motion } from "framer-motion";

import { themeContext } from '../../Contex';
import Resume from './Black Gradient Creative Web Designer Resume.pdf';


const Services = () => {

    // transition
    const transition = {
      duration: 1,
      type: "spring",
    };



  const them =     useContext(themeContext)
  const darkMode = them.state.darkMode;
  return (
    <div className='servicess' id='services'>
      <div className='awesome'>
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Servicess</span>
        <span style={{ color: darkMode ? "white" : "black" }}>
        Abdrhman, a global innovator in web development and Figma design 🌐✨ <br></br>. I specialize in translating ideas 
        into seamless digital experiences, merging cutting-edge technology with visually <br></br>
         stunning designs. Join me on a 
        journey to elevate your online presence, creating websites and  <br></br>
        Figma designs that resonate with audiences worldwide. Let's turn your <br></br> 
        vision into a global digital masterpiece! 💻🌍🚀
          <br />
          ispum is simpley dummy text of printing
        </span>
        <a  href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>











      <div className= "cards">
      
      <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Crad
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Html, Css, an so MORE"}
          />
        </motion.div>


        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Crad
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express , MONGODB"}
          />
        </motion.div>


  

        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Crad
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "figma is the One moste usng Design in Web apliaction an Mopil application"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>


        
        
        </div>









    </div>
  )
}

export default Services