import React from 'react'

import "./card.css"
import { useContext } from 'react';
import { themeContext } from '../../Contex';

const Crad = ({emoji, heading, detail, color}) => {

  const them =     useContext(themeContext)
  const darkMode = them.state.darkMode;
  return (
 
        <div className="card" style={{borderColor: {color}}}> 
          <img src={emoji} alt="" />
          <span style={{ color: darkMode ? "white" : "black" }}>{heading}</span>
          <span style={{ color: darkMode ? "white" : "black" }}>{detail}</span>
          
        </div>
      
      );

}

export default Crad