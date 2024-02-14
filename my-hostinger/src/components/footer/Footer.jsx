import React from 'react'

import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

import "./footer.css"


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <div className="flex justify-center space-x-4">
        {/* Facebook Icon */}
        <a href="https://github.com/Abdrhmaan?tab=repositories" target="_blank" rel="noopener noreferrer">
           <FaGithub />
        </a>

        {/* TikTok Icon */}
        <a href="https://www.facebook.com/abdirahman.mohamedabdi.3956" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
        </a>

        {/* WhatsApp Icon */}
        <a href="https://wa.me/0907605589" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
        </a>
      </div>

      {/* Copyright Symbol */}
      <p className="mt-4">&copy; 2024 Eng xaan. All rights reserved.</p>
    </footer>
  );
};




export default Footer