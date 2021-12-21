import React from 'react';
import './navbar.css';

const Navbar = () => (
  <div className="navbar-wrapper">
    <p><strong>Back</strong></p>
    <p>Filter by Pokemon type</p>
    <select>
      <option>All</option>
      <option>Colorless</option>
      <option>Darkness</option>
      <option>Dragon</option>
      <option>Fairy</option>
      <option>Fighting</option>
      <option>Fire</option>
      <option>Grass</option>
      <option>Lightning</option>
      <option>Metal</option>
      <option>Psychic</option>
      <option>Water</option>
    </select>
  </div>
);

export default Navbar;