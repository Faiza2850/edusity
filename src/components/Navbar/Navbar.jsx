import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

export const Navbar = () => {
  return (
    <>
    <nav className='container'>
        <img  src={logo} alt='' className='logo'/>
        <ul className='nav-items'>
            <li>Home</li>
            <li>Program</li>
            <li>About Us</li>
            <li>Testimonials</li>
            <li>Campus</li>
            <li><button className='btn'>Contact Us</button></li>
        </ul>
    </nav>
    </>
  )
}
