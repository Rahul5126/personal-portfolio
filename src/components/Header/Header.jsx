import React from 'react'

import './Header.css'

import Toggle from '../Toggle/Toggle'

const Header = () => {
  return (
    <div className='n-wrapper' id='home'>

        <div className='n-left'>
            <div className='n-name'>Portfolio.</div>
            
            <Toggle/>

        </div>

    </div>
  )
}

export default Header