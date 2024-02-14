import React, { useContext } from 'react';
import "./intro.css";
import githun from "../../img/github.png";
import instagram from "../../img/instagram.png";
import linkedin from "../../img/linkedin.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/3593f304-ec50-4824-a103-1801aa2dc483-removebg-preview (1).png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import Floatingdiv from '../floting/Floatingdiv';
import { themeContext } from '../../Contex.js';
import { motion } from "framer-motion";

const Intro = () => {
    const them = useContext(themeContext);
    const darkMode = them.state.darkMode;
    const transition = { duration: 2, type: "spring" };
  
    return (
      <div className='intro'>
        <div className='i-left'>
          <div className='i-name'>
            <span style={{ color: darkMode ? 'white' : '' }}>Hi I am !</span>
            <span className=''>Abdrhmaan</span>
            <span style={{ color: darkMode ? 'white' : 'black' }}>
              👋 Hello! I'm Abdrhman, 
   an adept web developer 🚀, specializes in cutting-edge technology, 
  particularly MERN stack projects. With a flair for creating innovative and user-centric web solutions,
   I seamlessly blend creativity with the latest in web development trends. Join me on a journey where 
   technology meets imagination, and together, 
  we'll craft immersive digital experiences that captivate and inspire. 💻✨
            </span>
          </div>
          <button className='button i-button'>Hire me</button>
          <div className='i-icon'>
            <a href='https://github.com/Abdrhmaan?tab=repositories' > <img src={githun} alt="GitHub" /></a> 
           <a href='https://www.facebook.com/abdirahman.mohamedabdi.3956' > <img src={linkedin} alt="LinkedIn" /></a> 
           <a href=' <img src={linkedin} alt="LinkedIn" />' > <img src={instagram} alt="Instagram" /></a>  
          </div>
        </div>
  
        <div className='i-right'>
          <img src={Vector1} alt="Vector1" />
          <img src={Vector2} alt="Vector2" />
          <img src={boy} alt="Boy" />
          <motion.img
            initial={{ left: "-36%" }}
            whileInView={{ left: "-24%" }}
            transition={transition}
            src={glassesimoji}
            alt="Glasses Emoji"
          />
  
          <motion.div
            initial={{ top: "-4%", left: "74%" }}
            whileInView={{ left: "68%" }}
            transition={transition}
            className="floating-div"
          >
            <Floatingdiv img={crown} text1="Web" text2="Developer" />
          </motion.div>
  
          <motion.div
            initial={{ left: "9rem", top: "18rem" }}
            whileInView={{ left: "0rem" }}
            transition={transition}
            className="floating-div"
          >
            <Floatingdiv img={thumbup} text1="Best Design" text2="Award" />
          </motion.div>
  
          <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
  
          <div
            className="blur"
            style={{
              background: "#C1F5FF",
              top: "17rem",
              width: "21rem",
              height: "11rem",
              left: "-9rem",
            }}
          ></div>
        </div>
      </div>
    );
}

export default Intro