import React, { useContext } from 'react'
import "./portofllio.css"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import bookinapp from "../../img/bookinapp.png";
import Ecommerce from "../../img/ecommerce.png";
import projectq1 from "../../img/projectq1.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from '../../Contex';


const Portfillio = () => {
  const them =     useContext(themeContext)
  const darkMode = them.state.darkMode;

  return (
    <div className="portfolio" id="portfolio">
    {/* heading */}
    <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
    <span>Portfolio</span>

    {/* slider */}
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      grabCursor={true}
      className="portfolio-slider"
    >
      <SwiperSlide>
        <img src={bookinapp} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Ecommerce} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={MusicApp} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={projectq1} alt="" />
      </SwiperSlide>
    </Swiper>
  </div>
);
  
}

export default Portfillio