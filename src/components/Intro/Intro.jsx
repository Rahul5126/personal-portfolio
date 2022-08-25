import React from 'react'

import './Intro.css'

import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Boy from '../../img/boy.png';
import Crown from '../../img/crown.png';
import thumbup from '../../img/thumbup.png';
import glassesimoji from '../../img/glassesimoji.png';

import FloatingDiv from '../FloatingDiv/FloatingDiv';

// Dark Mode
import { useContext } from 'react';
import { themeContext } from "../../Context";

// Animation
import {motion} from 'framer-motion'

// Text Animation
import Typewriter from 'typewriter-effect';

const Intro = () => {

    // Dark Mode
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    // Animation
    const transition = {duration : 2, type: 'spring'}


  return (
    <div className='intro' id='intro'>


        <div className="i-left">
            <div className="i-name">
                <h1 style={{color: darkMode? 'white': ''}}>Hi! I'm Rahul</h1>
                <span>
                    <Typewriter
                        options={{
                            strings: ['Web Developer', 'Full Stack Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </span>
                <span>A Fresher who is trying to get experience and knowledge in web designing and development by creating some practical and Quality projects. I'm a web developer with a focus on front-end development but still exploring other technologies and frameworks that catch my interest! If you are looking for a developer to add to your team, I'd love to hear from you!</span>
            </div>
            <a href='#contact' alt=''>
            <button className='button i-button'>Hire me</button>
            </a>
            <div className='i-icons'>
                <a href='https://github.com/Rahul5126?tab=repositories' alt=''>
                <img src={Github} alt='' />  
                </a> 
                <a href='https://www.linkedin.com/in/rahul-singh-8a8479204/' alt=''>
                <img src={Linkedin} alt='' />
                </a>
                <a href='https://www.instagram.com/the_rahul.singh/' alt=''>
                <img src={Instagram} alt='' />
                </a>
            </div>
        </div>

        <div className="i-right">

            <img src={Vector1} alt='' />
            <img src={Vector2} alt='' />
            <img src={Boy} alt='' />

            <motion.img
            initial = {{left: '-36%'}}
            whileInView = {{left: '-24%'}}
            transition={transition}
            src={glassesimoji} alt='' />

            <motion.div 
            initial = {{top : '-3%', left: '64%'}}
            whileInView={{left: '58%'}}
            transition={transition}

            className="floating-div"
            style={{top: '-3%', left: '58%',}}>
            <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
            </motion.div>

            <motion.div 
            initial = {{top : '18rem', left: '9rem'}}
            whileInView={{left: '2rem'}}
            transition={transition}
            
            className="floating-div"
            style={{top: '18rem', left: '2rem',}}>
            <FloatingDiv image={thumbup} txt1='Full Stack' txt2='Developer' />
            </motion.div>

            {/* blur divs */}
            <div className='blur' style={{background: "rgb(238 210 255)"}}></div>
            <div className='blur' style={{background: '#C1F5FF', top: '17rem', width:'21rem', height: '11rem', left: '-9rem'}}></div>

        </div>


    </div>
  )
}

export default Intro