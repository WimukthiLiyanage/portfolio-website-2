import React from 'react'
import './contact.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineWhatsapp } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contacat Me</h2>

      <div className='container contact_container'>
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows="10" placeholder='Your Message'></textarea>
          <button type='submit' className='btn_primary'>Send Message</button>
        </form>
        <div className='contact_options'>
          <article className='contact_option'>
          <a href="mailto:wimuinfor@gmail.com" target='_blank'className='send_message'><MdOutlineMailOutline className='contact_icon'/></a>
          <h4>Email</h4>
          <h5>wimuinfor@gmail.com</h5>
          <a href="mailto:wimuinfor@gmail.com" target='_blank'className='send_message'>Send a message</a>
          </article>

          <article className='contact_option'>
          <a href="https://api.whatsapp.com/send?phone=+94766175146" target='_blank'className='send_message'><MdOutlineWhatsapp className='contact_icon'/> </a> 
          <h4>WhatsApp</h4>
          <h5>+94766175146</h5>
          <a href="https://api.whatsapp.com/send?phone=+94766175146" target='_blank'className='send_message'>Send a message</a>
          </article>

          <article className='contact_option'>
          <a href="mailto:wimuinfor@gmail.com" target='_blank' className='send_message'><RiMessengerLine className='contact_icon'/></a>
          <h4>Messenger</h4>
          <h5>Wimukthi Liyanage</h5>
          <a href="mailto:wimuinfor@gmail.com" target='_blank' className='send_message'>Send a message</a>
          </article>
        </div>



      </div>
    
    
    </section>
  )
}

export default Contact