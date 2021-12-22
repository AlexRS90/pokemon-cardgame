import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import filterPokemon from '../redux/pokemon/actionsCreator';
import './navbar.css';

const Navbar = ({ name }) => {
  const dispatch = useDispatch();
  return (
    <div className="navbar-wrapper">
      <Link to="/">
        <p className={`${name ? 'visible' : 'hidden'} back-button`}><strong>&lt;</strong></p>
      </Link>
      <p>{(name) ? name : 'Filter by Type'}</p>
      <select className={`${name ? 'hidden' : 'visible'} list-style`}
        id="pokemonType" onChange={() =>
        dispatch(filterPokemon(document.getElementById('pokemonType').value))}>
        <option value="All">All</option>
        <option value="Colorless">Colorless</option>
        <option value="Darkness">Darkness</option>
        <option value="Dragon">Dragon</option>
        <option value="Fighting">Fighting</option>
        <option value="Fire">Fire</option>
        <option value="Grass">Grass</option>
        <option value="Lightning">Lightning</option>
        <option value="Metal">Metal</option>
        <option value="Psychic">Psychic</option>
        <option value="Water">Water</option>
      </select>
    </div>
  );
};

export default Navbar;
