import React from 'react';
import logo from '../assets/images/planet.png';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
  <nav className='flex-center navbar'>
    <div className="row logo">
      <img src={logo} alt="Logo Space X" />
      <h1>Space Travelers'Hub</h1>
    </div>
    <ul className='flex-center no-style list-nav'>
      <li>
      <NavLink to="" path="/" exact>
         Rockets
        </NavLink>
      </li>
      <li>
      <NavLink to="Missions" path="/Missions">
      Missions
        </NavLink>
      </li>
      <hr className='seprator'/>
      <li>
      <NavLink to="My Profile" path="/My Profile">
         My Profile
        </NavLink>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar