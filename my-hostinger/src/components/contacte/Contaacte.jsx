import React, { useContext, useState ,useRef} from 'react';
import "./contac.css";
import { themeContext } from '../../Contex';
import emailjs from "@emailjs/browser";
import axios from 'axios';
const Contaacte = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_czivndc",
         "template_njzijlf",
        form.current,
        "tXomWBTBcle67bmKY"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
   
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name" style={{ color: darkMode ? 'blue' : 'black'}} color='white'/>
          <input type="email" name="user_email" className="user" placeholder="Email" style={{ color: darkMode ? 'blue' : 'black' }}/>
          <textarea name="message" className="user" placeholder="Message" style= {{ color: darkMode ? 'blue' : 'black' }}/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contaacte;
