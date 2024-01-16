import React from 'react'
import './nav.css'
import { IoHome } from "react-icons/io5";
import { FaUserCheck } from "react-icons/fa";
import { FaBookMedical } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import { MdAddCall } from "react-icons/md";

function Nav() {
  return (
    <nav >
      <a href=" #"><IoHome /></a>
      <a href="#about"><FaUserCheck /></a>
      <a href="#experience"><FaBookMedical /></a>
      <a href="#services"><MdDesignServices /></a>
      <a href="#contact"><MdAddCall /></a>
    </nav>
  )
}

export default Nav