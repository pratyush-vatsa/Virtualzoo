import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="p-3">
      <div className="container">
        <h2 style={{ color: 'gold', fontSize: '3em' }}>Virtual Zoo ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</h2>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><NavLink exact to="/" className="nav-link px-2 text-white">Home</NavLink></li>
          <li><NavLink to="/Fauna" className="nav-link px-2 text-white">Fauna</NavLink></li>
          <li><NavLink to="/Flora" className="nav-link px-2 text-white">Flora</NavLink></li>
          <li><NavLink to="/Donation" className="nav-link px-2 text-white">Donation</NavLink></li>
          <li><NavLink to="/Quiz" className="nav-link px-2 text-white">Quiz</NavLink></li>
          <li><a href="/AboutUs" className="nav-link px-2 text-white">About Us</a></li>
        </ul>
        </div>
    </header>
  );
}
