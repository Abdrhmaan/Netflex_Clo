import React, { useContext } from 'react'
import "./test.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Correct import if the module is named 'swiper' in the Swiper library
import { Navigation, Pagination } from 'swiper/modules';


import "swiper/css/pagination";

import profilePic1 from "../../img/jirde.jpeg";
import profilePic2 from "../../img/qaasim.jpeg";
import profilePic3 from "../../img/shucayb.jpg";
import profilePic4 from "../../img/dheere.jpeg";
import { themeContext } from '../../Contex';




const Testiminuls = () => {
    const clients = [
        {
          img: profilePic1,
          review:
            " my name Eng Apdrizk It was a pleasure working with you, you are a perfect developer and we hope to work with you again.",
        },
        {
          img: profilePic2,
          review:
            "My name is Qasim, I'm glad you did it for me. I hope we will work together many times.",
        },
        {
          img: profilePic3,
          review:
            
            " my name Shucyb Enthusiastic and client-focused, I am a seasoned professional in the realm of web development. With a keen eye for detail and a commitment to delivering excellence, I've earned the trust of clients through my ability to turn their visions into reality. My proficiency in various programming languages and dedication to staying abreast of the latest industry trends ensure that I create websites that not only meet but exceed ",
        },
        {
          img: profilePic4,
          review:
            " My name Abdullai As a website creator, I've established a reputation for building digital landscapes that captivate and resonate. Client trust is at the core of my approach, and I've cultivated enduring partnerships by translating visions into visually stunning and highly functional websites. With a commitment to innovation and a knack for understanding ",
        },
      ];
    

      
const them =     useContext(themeContext)
const darkMode = them.state.darkMode;
      return (
        <div className="t-wrapper" id="testimonial">
          <div className="t-heading">
            <span>Clients always get </span>
            <span>Exceptional Work </span>
            <span>from me...</span>
          <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
          <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
    
          </div>
          <Swiper
            // install Swiper modules
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{ clickable: true }}
         
      
            
          >
            {clients.map((client, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="testimonial">
                    <img src={client.img} alt="" />
                    <span  style={{ color: darkMode ? "white" : "black" }}>{client.review}</span>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      );
}

export default Testiminuls