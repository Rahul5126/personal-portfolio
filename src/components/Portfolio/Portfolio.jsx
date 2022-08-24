import React from 'react'

import './Portfolio.css'

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'

import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";

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
                    <img src={Sidebar} alt='' />
                    <a href='https://github.com/Rahul5126' className='btn'>Github</a>
                    <a href='https://github.com/Rahul5126' className='btn2'>Demo</a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='portfolio-image'>
                    <img src={Ecommerce} alt='' />
                    <a href='https://github.com/Rahul5126' className='btn'>Github</a>
                    <a href='https://github.com/Rahul5126' className='btn2'>Demo</a>
                </div>
            </SwiperSlide>
            <SwiperSlide className='portfolio-items'>
                <div className='portfolio-image'>
                    <img src={HOC} alt='' />
                    <a href='https://github.com/Rahul5126' className='btn'>Github</a>
                    <a href='https://github.com/Rahul5126' className='btn2'>Demo</a>
                </div>
            </SwiperSlide>
            <SwiperSlide className='portfolio-items'>
                <div className='portfolio-image'>
                    <img src={MusicApp} alt='' />
                    <a href='https://github.com/Rahul5126' className='btn'>Github</a>
                    <a href='https://github.com/Rahul5126' className='btn2'>Demo</a>
                </div>
            </SwiperSlide>

        </Swiper>

    </div>
  )
}

export default Portfolio