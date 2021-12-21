import React from 'react';
import Navbar from './navbar';
import ShowPokemon from './homePageBottom';
import './homePageTop.css';

const DisplayPokemon = () => (
  <>
    <Navbar />
    <div className="pokemon-wrapper">
      <p>Aqui va el tipo seleccionado</p>
      <p>Pokemon by: </p>
    </div>
    <ShowPokemon />
  </>
);

export default DisplayPokemon;