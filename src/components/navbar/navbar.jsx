import React from 'react';
import Image from 'next/image';
import arrow from '../assets/images/arrow.png';
import hamburger from '../assets/images/hamburger.png';
import './navbar.scss';

export default function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar__items">
            <a href="#" className="navbar__link">About</a>
            <a href="#" className="navbar__link">News</a>
            <a href="#" className="navbar__link">Services</a>
            <a href="#" className="navbar__link">Our Team</a>
            <a href="#" className="navbar__link">Make Enquiry</a>
        </div>
        <button className="navbar__button">Contact Us <Image src={arrow} className="navbar__button-arrow" /></button>
        <button className='navbar__hamburger'><Image className='navbar__hamburger__image' src={hamburger} alt="" /></button>
    </nav>
  )
}