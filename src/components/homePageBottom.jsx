import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getPokemon } from '../redux/pokemon/actionsCreator';
import Navbar from './navbar';
import './homePageBottom.css';
import All from './assets/All.png';
import Colorless from './assets/colorless.png';
import Darkness from './assets/Darkness.png';
import Dragon from './assets/Dragon.png';
import Fighting from './assets/Fighting.png';
import Fire from './assets/Fire.png';
import Grass from './assets/Grass.png';
import Lightning from './assets/Lightining.png';
import Metal from './assets/Metal.png';
import Psychic from './assets/Psychic.png';
import Water from './assets/Water.png';

const ShowPokemon = () => {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state);
  useEffect(() => {
    dispatch(getPokemon());
  }, []);
  const numberOfPokemon = pokemon.length;
  let pokemonType = 'All';
  if (numberOfPokemon < 250) pokemonType = pokemon[0].type;
  return (
    <>
      <Navbar />
      <div className="pokemon-wrapper" data-testid="testing">
        {
          (pokemonType === 'Water' ? <img src={Water} width="120" alt="Pokemon type" />//eslint-disable-line
          : pokemonType === 'Psychic' ? <img src={Psychic} width="120" alt="Pokemon type" />//eslint-disable-line
          : pokemonType === 'Metal' ? <img src={Metal} width="120" alt="Pokemon type" />//eslint-disable-line
          : pokemonType === 'Lightning' ? <img src={Lightning} width="120" alt="Pokemon type" />//eslint-disable-line
          : pokemonType === 'Grass' ? <img src={Grass} width="120" alt="Pokemon type" />//eslint-disable-line
          : pokemonType === 'Fire' ? <img src={Fire} width="120" alt="Pokemon type" />//eslint-disable-line
          : pokemonType === 'Fighting' ? <img src={Fighting} width="120" alt="Pokemon type" />//eslint-disable-line
          : pokemonType === 'Dragon' ? <img src={Dragon} width="120" alt="Pokemon type" />//eslint-disable-line
          : pokemonType === 'Darkness' ? <img src={Darkness} width="120" alt="Pokemon type" />//eslint-disable-line
          : pokemonType === 'Colorless' ? <img src={Colorless} width="120" alt="Pokemon type" />//eslint-disable-line
          : <img src={All} width="200" alt="Pokemon type" />)//eslint-disable-line
        }
        <p>
          {numberOfPokemon}
          <br />
          Pokemon
          <br />
          Cards
        </p>
      </div>
      <p className="middle-bar">
        Pokemon type:
        {(numberOfPokemon < 250) ? pokemonType : 'All'}
      </p>
      <div className="card-container">
        {pokemon.map((data) => (
          <div key={data.id} className="card-wrapper">
            <NavLink
              to={`/detail/${data.id}`}
              state={{
                id: data.id,
                name: data.name,
                pokedex: data.pokedex,
                hp: data.hp,
                type: data.type,
                attack: data.attack,
                rarity: data.rarity,
                image: data.image,
                price: data.price,
              }}
            >
              <img src={data.image} alt="pokemon" className="poke-card" />
            </NavLink>
            <p>{data.name}</p>
            <p className="poke-number">
              Pokedex No:
              {data.pokedex}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShowPokemon;
