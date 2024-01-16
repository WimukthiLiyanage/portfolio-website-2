import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";




function HeaderSocials() {
  return (
    <div className='header_socials'>
      <a className='header_social' href="https://www.linkedin.com/in/wimukthi-liyanage-21171225a/
" target='_blank'><FaLinkedin />

</a>
      <a className='header_social'href="https://github.com/WimukthiLiyanage" target='_blank'><FaGithubSquare />
</a>
      <a className='header_social' href="http://linkedin.com" target='_blank'><FaTwitterSquare />
</a>
    </div>
  )
}

export default HeaderSocials