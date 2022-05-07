import React from 'react'
import './Footer.css'

const Footer = () => {

    let timer = new Date();
    let year = timer.getFullYear();

  return (
    <div className='footer-box'>
        © {year} My Bank. All Rights Reserved.
    </div>
  )
}

export default Footer