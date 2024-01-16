import React from 'react'
import './header.css'
import CTA  from './CTA'
import ME from '../../assets/pic2.png'
import HeaderSocials from './HeaderSocials.jsx'

function Header() {
  return (
    <header>
      <div className='container header__container'>
        <h4>Hellow... Ayubowan!</h4>
        <h2>I'm  WIMU</h2>
        <h4 className="tex-light">Fullstack Developer & Disinger</h4>
        <CTA/>
        <HeaderSocials/>

        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down...</a>
        
      </div>
    </header>
  )
}

export default Header