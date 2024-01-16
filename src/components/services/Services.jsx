import React from 'react'
import './services.css'
import { IoShieldCheckmarkOutline } from "react-icons/io5";

function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container sesrvices_container'>
        <article className='services'>
          <div className='service_hedder'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='services_list'>
            <li>
            <IoShieldCheckmarkOutline className='check_icon'/>
            <p>Visual Design</p>
           </li>
           <li>
            <IoShieldCheckmarkOutline className='check_icon'/>
            <p>Interaction Design</p>
           </li>
           <li>
            <IoShieldCheckmarkOutline className='check_icon'/>
            <p>Usability Testing</p>
           </li>
           <li>
            <IoShieldCheckmarkOutline className='check_icon'/>
            <p>Responsive Design</p>
           </li>
           <li>
            <IoShieldCheckmarkOutline className='check_icon'/>
            <p>User Persona Development</p>
           </li>
          </ul>
        </article>

        <article className='services'>
          <div className='service_hedder'>
            <h3>Web Development</h3>
          </div>

          <ul className='services_list'>
            <li>
            <IoShieldCheckmarkOutline className='check_icon'/>
            <p>Website Development</p>
           </li>
           <li>
            <IoShieldCheckmarkOutline className='check_icon'/>
            <p>Front-End Development</p>
           </li>
           <li>
            <IoShieldCheckmarkOutline className='check_icon'/>
            <p>E-commerce Development</p>
           </li>
           <li>
            <IoShieldCheckmarkOutline className='check_icon'/>
            <p>Responsive Web Design</p>
           </li>
           <li>
            <IoShieldCheckmarkOutline className='check_icon'/>
            <p>Web Application Development</p>
           </li>
           <li>
            <IoShieldCheckmarkOutline className='check_icon'/>
            <p>Custom Web Solutions</p>
           </li>
           
          </ul>
        </article>

        <article className='services'>
          <div className='service_hedder'>
            <h3>Graphic Design</h3>
          </div>

          <ul className='services_list'>
            <li>
            <IoShieldCheckmarkOutline className='check_icon'/>
            <p>Logo Design</p>
           </li>
           <li>
            <IoShieldCheckmarkOutline className='check_icon'/>
            <p>Website Visual Design</p>
           </li>
           <li>
            <IoShieldCheckmarkOutline className='check_icon'/>
            <p>Banner Ad Design</p>
           </li>
           <li>
            <IoShieldCheckmarkOutline className='check_icon'/>
            <p>Image Editing and Optimization</p>
           </li>
           <li>
            <IoShieldCheckmarkOutline className='check_icon'/>
            <p>Custom Graphics and Illustrations</p>
           </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services