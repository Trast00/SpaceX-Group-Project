import React from 'react';
import logo from '../assets/images/planet.png';
import './Navbar.css';

function Navbar() {
  return (
  <nav className='flex-center navbar'>
    <div className="row logo">
      <img src={logo} alt="Logo Space X" />
      <h1>Space Travelers'Hub</h1>
    </div>
    <ul className='flex-center no-style list-nav'>
      <li>Rockets</li>
      <li>Missions</li>
      <hr className='seprator'/>
      <li>My Profile</li>
    </ul>
  </nav>
  )
}

export default Navbar