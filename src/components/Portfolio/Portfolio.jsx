import React from 'react'

import './Portfolio.css'

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'

import {Pagination} from 'swiper'
import 'swiper/css/pagination'

import Project1 from "../../img/project1.png";
import Project2 from "../../img/project2.png";
import Project3 from "../../img/project3.png";


import { useContext } from 'react';
import { themeContext } from "../../Context";

const Portfolio = () => {

    // Dark Mode
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className='portfolio' id='projects'>

        {/* heading */}
        <span style={{color: darkMode? 'white': ''}}>Recent Projects</span>
        <span>Portfolio</span>

        {/* slider */}
        <Swiper
        grabCursor={true}
        modules={[Pagination]}
        pagination={{clickable: true}}
        breakpoints={{
            0: {
                slidesPerView : 1,
                spaceBetween : 10,
            },

            480: {
                slidesPerView : 1,
                spaceBetween : 10,
            },

            768: {
                slidesPerView : 2,
                spaceBetween : 20,
            },

            1024: {
                slidesPerView : 3,
                spaceBetween : 30,
            },

            1280: {
                slidesPerView : 3,
                spaceBetween : 30,
            }
        }}

        className='portfolio-slider'
        >

            <SwiperSlide>
                <div className='portfolio-image'>
                    <img src={Project1} alt='' />
                    <a href='https://github.com/Rahul5126/personal-portfolio' className='btn'>Github</a>
                    <a href='https://rahulthedeveloper.netlify.app/' className='btn2'>Demo</a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='portfolio-image'>
                    <img src={Project2} alt='' />
                    <a href='https://github.com/Rahul5126/react-multiPages-portfolio' className='btn'>Github</a>
                    <a href='https://multi-pageportfolio.netlify.app/' className='btn2'>Demo</a>
                </div>
            </SwiperSlide>
            <SwiperSlide className='portfolio-items'>
                <div className='portfolio-image'>
                    <img src={Project3} alt='' />
                    <a href='https://github.com/Rahul5126/connect4-game' className='btn'>Github</a>
                    <a href='#projects' className='btn2'>Demo</a>
                </div>
            </SwiperSlide>
            

        </Swiper>

    </div>
  )
}

export default Portfolio