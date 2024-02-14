import React, { useContext } from 'react'
import "./togle.css"

import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import { themeContext } from '../../Contex.js';
const Toggle = () => {
    const them =     useContext(themeContext)
    const darkMode = them.state.darkMode;
    console.log(them)
    console.log(darkMode)


    const handleClick = () => {
        // debugger
        them.dispatch({ type: "toggle" });
      };
  return (
    <div className='toggle' onClick={handleClick}>
          <Moon />
      <Sun />
      

      </div>

  )
}

export default Toggle