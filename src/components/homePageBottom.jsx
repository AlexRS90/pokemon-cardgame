import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getPokemon } from "../redux/pokemon/actionsCreator";
import './homePageBottom.css';

const ShowPokemon = () => {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state);
  useEffect(() => {
    if(pokemon.length === 0) dispatch(getPokemon());
  }, []);
  return ( 
      <div className="card-container">
        {pokemon.map((data) => (
            <div key={data.id} className="card-wrapper">
              <NavLink to={'/detail/' + data.id}
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
              }}>
                <img src={data.image} alt="pokemon" className="poke-card" />
              </NavLink>
              <p>{data.name}</p>
              <p>Pokedex No: {data.pokedex}</p>
            </div> 
        ))}
      </div>
  );
};

export default ShowPokemon;
