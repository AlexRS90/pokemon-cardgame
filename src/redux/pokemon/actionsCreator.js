import axios from 'axios';
import { FETCH_SUCCES, POKEMON_TYPE } from './actionsType';

const url = 'https://api.pokemontcg.io/v2/cards/';

export const succesPokemon = (pokedex) => {
  const payload = pokedex.map((e) => (
    {
      id: e.id,
      name: e.name,
      hp: e.hp,
      type: e.types[0],
      attack: e.attacks,
      rarity: e.rarity,
      pokedex: e.nationalPokedexNumbers[0],
      image: e.images.small,
      price: e.cardmarket.prices,
    }
  ));
  return (
    {
      type: FETCH_SUCCES,
      payload,
    }
  );
};

export const getPokemon = () => (dispatch) => {
  axios.get(url).then((response) => {
    dispatch(succesPokemon(response.data.data));
  });
};

export const chooseType = (pokemonType) => ({
  type: POKEMON_TYPE,
  payload: pokemonType,
});

const filterPokemon = (type) => (dispatch) => {
  if (type === 'All') dispatch(getPokemon());
  if (type !== 'All') dispatch(chooseType(type));
};

export default filterPokemon;
