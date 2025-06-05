import React, { useState } from 'react';
import logo from './Logo.svg';

function DropdownMenu() {
  const items = [
    'Breakfast', 'Lunch', 'Dinner', 'Desserts', 'Drinks', 'Specials',
    'Kids', 'Vegan', 'Gluten-Free', 'Seasonal', 'Chef\'s Choice', 'More...'
  ];

  return (
    <ul className="dropdown-menu">
      {items.map(item => (
        <li key={item}><a href={`/menu/${item.toLowerCase()}`}>{item}</a></li>
      ))}
    </ul>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="App-navigation">
      <img src={logo} className="App-logo" alt="logo" />
      <nav>
        <ul>
          <li><a href="/home">Homepage</a></li>
          <li><a href="/about">About</a></li>
          <li
            className="dropdown"
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
          >
            <a href="/menu">Menu</a>
            {menuOpen && <DropdownMenu />}
          </li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/order online">Order Online</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;


