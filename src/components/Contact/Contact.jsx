import React, { useState } from 'react'

import './Contact.css'

import emailjs from '@emailjs/browser';
import { useRef } from 'react';

import { useContext } from 'react';
import { themeContext } from "../../Context";

const Contact = () => {


  const form = useRef();

  const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gca9dwa', 'template_38zdrb3', form.current, 'TQkL79hmTwOI0SyvX')

    setDone(true)

    e.target.reset()

  };


  // Dark Mode
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


  return (
    <div className="contact-form" id="contact">

        <div className="w-left">
            <div className="awesome">
                <span style={{color: darkMode? 'white': ''}}>Get in Touch</span>
                <span>Contact me</span>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
        </div>

        <div className="c-right">
            <form ref={form} onSubmit={sendEmail} >
              <input type="text" name="user_name" className="user"  placeholder="Name"/>
              <input type="email" name="user_email" className="user" placeholder="Email"/>
              <textarea name="message" className="user" placeholder="Message"/>
              <input type="submit" value="Send" className="button"/>

              <span>{done && "Thanks for Contacting me..."}</span>
              
              <div className="blur c-blur1" style={{ background: "rgb(238 210 255)" }}></div>
            </form>
        </div>

    </div>
  )
}

export default Contact
