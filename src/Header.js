import React from 'react';
import logo from './Logo.svg';


function Header({ onBookClick }) {
  return (
    <header className="App-navigation">
      <img src={logo} className="App-logo" alt="logo" />
      <nav>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="#About-section">About</a></li>
          <li><a href="#Menu">Menu</a></li>
          <li><a href="#Reservation" onClick={e => {e.preventDefault(); onBookClick();}}>Reservations</a></li>
          <li><a href="/order online">Order Online</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;


