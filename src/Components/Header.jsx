import React from 'react';
import './Header.css';
import logo from '../Assets/logo512.png';

const Header = () => {

  return (
    <div className='header-container'>
      <form action="/form/submit" method="GET">
        <input type="text" className='search' placeholder='Search contact'></input>
      </form>
      <div className='menu'> About Us </div>
      <div className='menu'> Phone Book </div>
      <div className='menu'> Contact Us </div>
    </div>
  )
}

export default Header