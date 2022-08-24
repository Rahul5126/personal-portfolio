import React from 'react'

import './Navbar.css'

import {AiOutlineHome} from 'react-icons/ai'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'

import { useState } from 'react'

const Navbar = () => {

  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href='#home' onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#skills' onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><RiServiceLine/></a>
      <a href='#projects' onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><AiOutlineFundProjectionScreen/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a> 
    </nav>
  )
}

export default Navbar