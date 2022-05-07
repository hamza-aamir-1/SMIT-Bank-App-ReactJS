import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-box'>
        <div className='navbar-logo-box'>
            <a href="#" className='navbar-logo'>My Bank</a>
        </div>
        <ul className='navbar-link-box'>
            <li className='navbar-item'>
                <a href="#" className='navbar-link'>Dashboard</a>
            </li>
            <li className='navbar-item'>
                <a href="#" className='navbar-link'>Accounts</a>
            </li>
            <li className='navbar-item'>
                <a href="#" className='navbar-link'>Transactions</a>
            </li>
        </ul>
    </div>
  )
}

export default Navbar