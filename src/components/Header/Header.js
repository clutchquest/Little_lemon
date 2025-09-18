import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './Logo.svg';
import'./Header.css'

function Header() {
  return (
    <header className="App-navigation">
      <img src={logo} className="App-logo" alt="logo" />
      <nav>
        <ul>
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="#About-section">About</NavLink></li>
          <li><NavLink to="#Menu">Menu</NavLink></li>
          <li><NavLink to="/Booking">Reservations</NavLink></li>
          <li><NavLink to="/order online">Order Online</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;


