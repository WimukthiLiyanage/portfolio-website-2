import React from 'react'
import './footer.css'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <a href="#" className='footer_logo'>WIMU</a>
      <ul className='permalink'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/wimukthi-liyanage-21171225a/"><FaLinkedin /></a>
        <a href="#"><FaSquareFacebook /></a>
        <a href="#"><FaInstagramSquare /></a>
        <a href="#"><FaTwitterSquare /></a>
      </div>
    </footer>

  )
}

export default Footer