import { NavLink } from 'react-router-dom';
import React from 'react';
import logo from '../assets/images/planet.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="flex-center navbar">
      <div className="row logo">
        <img src={logo} alt="Logo Space X" />
        <h1>Space Travelers Hub</h1>
      </div>
      <ul className="flex-center no-style list-nav">
        <li>
          <NavLink to="/" path="/" className={({ isActive }) => (isActive ? 'navLink active' : 'navLink')}>
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink to="missions" path="/missions" className={({ isActive }) => (isActive ? 'navLink active' : 'navLink')}>
            Missions
          </NavLink>
        </li>
        <hr className="seprator" />
        <li>
          <NavLink to="myprofile" path="/myprofile" className={({ isActive }) => (isActive ? 'navLink active' : 'navLink')}>
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
