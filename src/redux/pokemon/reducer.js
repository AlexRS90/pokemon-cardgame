import { FETCH_SUCCES, POKEMON_TYPE } from "./actionsType";

const initialState = [{
  type: 'All',
  id: 'pl1-1',
}];
let cacheState = [];

const pokemonReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_SUCCES:
      cacheState=action.payload;
      return action.payload;
    case POKEMON_TYPE:
      return (cacheState.filter((pokemon) => pokemon.type === action.payload));
    default:
      return state;
  };
};

export default pokemonReducer;