import React from 'react'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Intro from './components/Intro/Intro'
import Portfolio from './components/Portfolio/Portfolio'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Skills from './components/Skills/Skills'


// For Toggle

import { useContext } from "react";
import { themeContext } from "./Context";



const App = () => {

// Toggle
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='App' style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}>
      <Header/>
      <Intro/>
      <Navbar/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
