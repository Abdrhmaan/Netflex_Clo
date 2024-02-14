import React, { useContext } from 'react';
import ux from "../../img/ui ux.png";
import jaavscrpte from "../../img/certifcate 1 programming.png";
import reacte from "../../img/advanced r.png";
import "../testminals/test.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css"; // Import the Swiper styles
import { Navigation, Pagination } from 'swiper/modules';
import { themeContext } from '../../Contex';
import "./test.css"

const Certifcate = () => {
  const certifcates = [
    {
      img: jaavscrpte,
      name: "JavaScript",
      review: "Hello, I'm Abdrhman, a passionate programmer who recently completed an intensive course in JavaScript programming. Fueled by curiosity and a desire to delve into the world of coding, I've honed my skills in crafting dynamic and interactive web solutions. From conquering the intricacies of JavaScript to building robust applications, I'm excited to embark on a journey where every line of code tells a story of innovation. Ready to turn ideas into reality and contribute to the ever-evolving landscape of web development."
    },
    {
      img: ux,
      name: "UI/UX Design",
      review: "Hi, I'm Abdrhman, a creative soul with a newfound expertise in UI/UX design. Recently completing an enriching course, I've delved into the art and science of creating visually stunning and user-friendly interfaces. From wireframing to prototyping, my passion lies in crafting digital experiences that seamlessly blend aesthetics with functionality. Armed with a deep understanding of user psychology, I'm excited to embark on a journey where every pixel tells a story. Ready to transform ideas into engaging designs and elevate user experiences to new heights!",
    },
    {
      img: reacte,
      name: "React",
      review: "Hey there, I'm Abdrhman a dedicated developer who has recently mastered the art of React.js programming. Having completed an immersive course, I now specialize in building powerful and responsive user interfaces. From crafting components to navigating the virtual DOM, I'm thrilled to bring cutting-edge React.js skills to the table. Eager to contribute to the world of modern web development, I'm on a mission to create seamless and captivating digital experiences. Let's code the future together!"






    },
  ];

  const them =     useContext(themeContext)
const darkMode = them.state.darkMode;

  return (
    <div id='Certificate'>
      <div className="blur t-blur1 mt-4" style={{ background: "var(--purple)" }}></div>
      <h1 className='text-3xl text-center mt-8'>Certificates</h1>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
    
        spaceBetween={10}
      >
        {certifcates.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="certificate  p-4 border border-red shadow-md my-8 mx-auto max-w-md">
              <img src={client.img} alt="" className="w-full h-40 object-cover mb-4 transition duration-300 transform hover:scale-105 rounded-md" />
              <span className="text-gray-700 block mb-2" style={{ color: darkMode ? "white" : "black" }}>{client.name}</span>
              <p className="text-gray-700"  style={{ color: darkMode ? "white" : "black" }}>{client.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Certifcate;
