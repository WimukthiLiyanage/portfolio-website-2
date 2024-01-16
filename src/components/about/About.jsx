import React from 'react'
import './About.css'
import Me from '../../assets/pi.jpg'
import { MdOutlineNetworkCheck } from "react-icons/md";
import { FaHandshakeSimple } from "react-icons/fa6";
import { FaFolderOpen } from "react-icons/fa";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container    about_container'>
        <div className='about_me'>
          <div className='about_meimage'>
            <img src={Me} alt="me" />
          </div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
            <div className='about_card'>
              <MdOutlineNetworkCheck className='icon' />
              <h5>Experience</h5>
              <small>3+ years</small>
            </div>

            <div className='about_card'>
            <FaHandshakeSimple className='icon'/>
              <h5>Clients</h5>
              <small>50+ Worldwide</small>
            </div>

            <div className='about_card'>
            <FaFolderOpen className='icon'/>
              <h5>Projects</h5>
              <small>60+ Completed</small>
            </div>
          </div>

        
        <p className='about_content'>Welcome to the digital playground where code meets creativity! I'm wimu, a passionate full-stack developer weaving pixels and lines of code into stunning digital experiences. With a blend of innovation and expertise, I craft seamless web solutions that transcend boundaries. Dive into my portfolio and witness the fusion of technology and design, where each project is a testament to my commitment to excellence. Let's embark on a journey through the realms of innovation and imagination together!</p>

        <a href="#contact" className='btn_primary'>Let's Talk</a>

        </div>
      </div>
    
      
    </section>
  )
}

export default About