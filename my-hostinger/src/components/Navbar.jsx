import React, { useContext, useState } from 'react';
import { Link } from 'react-scroll';


import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import Toggle from './toggle/Toggle';
import { themeContext } from '../Contex';



// ... (your imports)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
 
  const them =     useContext(themeContext)
  const darkMode = them.state.darkMode;

  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name" >Abdrhmaan</div>
       

        <Toggle />
       
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            <li>
              <Link to="experience" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li>
            <li>
              <Link to="Certificate" spy={true} smooth={true}>
              Certificate
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
      </div>

      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine style={{ color: darkMode ? 'red' : 'black' }} color="#black" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line style={{ color: darkMode ? 'white' : 'black' }} color="#black" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center"  style={{
        
          color: darkMode ? "black" : "white",
          background: darkMode ? "white" : "black",
        }}>
          <div className="gpt3__navbar-menu_container-links">
          <li style={{listStyle : "none"}}>
              <Link to="Navbar" spy={true} smooth={true}>
              Home
              </Link>
            </li>
         
            <p><a href="#possibility">
            <li style={{listStyle : "none"}}>
              <Link to="services" spy={true} smooth={true}>
              Serivces
              </Link>
            </li></a></p>
            <p><a href="#features">
            <li style={{listStyle : "none"}}>
              <Link to="experience" spy={true} smooth={true}>
              Experience
              </Link>
            </li></a></p>
            <p><a href="#blog">
              </a>
              <li style={{listStyle : "none"}}>
              <Link to="portfolio" spy={true} smooth={true }  className=' cursor-pointer'>
              Protfolio
              </Link>
            </li></p>
            <p> <li style={{listStyle : "none"}}>
              <Link to="testimonial" spy={true} smooth={true} className=' cursor-pointer'>
              Testimonial
              </Link>
            </li></p>
            <p> <li style={{listStyle : "none"}} className=' cursor-pointer'>
              <Link to="Certificate" spy={true} smooth={true}>
              Certificate
              </Link>
            </li></p>
          </div>
       
        </div>
        )}
      </div>




    </div>
  );
};

export default Navbar;
