import React from 'react'

import './Skills.css'
import Heartemoji from '../../img/heartemoji.png'
import Card from '../Cards/Card'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Resume from './Rahul Singh(Resume).pdf'

// Dark Mode
import { useContext } from 'react';
import { themeContext } from "../../Context";

// Animation
import { motion } from 'framer-motion'

const Skills = () => {

  // Dark Mode
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // Animation
  const transition = {duration: 2, type: 'spring'}
  return (
    <div className='skills' id='skills'>

        {/* left side */}
        <div className='awesome'>
            <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
            <span>skills</span>
            <span>
                As a fresher, I am interested in learning new things. As a student,
                <br/>
                I have learnt things theoretically and implemented them on personal  
                <br/> 
                projects. But I am waiting for opportunity to implement them in organization.
            </span>

            <a href={Resume} download>
            <button className='button s-button'>Download CV</button>
            </a>

            <div className='blur s-blur1' style={{ background: "#ABF1FF94" }} ></div>

        </div>

        {/* right side */}
        <div className="cards">

          {/* first card */}
          <motion.div 
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          
          style={{left: '14rem'}}>
            <Card 
            emoji = {Heartemoji}
            heading = {'Developer'}
            detail = {"Html, CSS, JavaScript, MongoDB, Express, React, Node"}
            />
          </motion.div>

          {/* second card */}
          <motion.div 
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
          
          style={{ top: "12rem", left: '-4rem' }}>
            <Card 
            emoji = {Glasses}
            heading = {'MERN Stack'}
            detail = {"MongoDB, ExpressJs, ReactJs, NodeJs"}
            />
          </motion.div>

          {/* third card */}
          <motion.div 
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
          
          style={{ top: "19rem", left: '12rem' }}>
            <Card 
            emoji = {Humble}
            heading = {'Full Stack'}
            detail = {"Git, Core Java, Html, CSS, Pug, JavaScript, React, Node, Express, MongoDB, RedHat Linux, Docker"}
            />
          </motion.div>

          <div className='blur s-blur2' style={{ background: "rgb(238 210 255)" }} ></div>

        </div>

    </div>
  )
}

export default Skills
