import { FETCH_FAILURE, FETCH_SUCCES, POKEMON_TYPE } from "./actionsType";

const initialState = [{
  type: 'All',
}];
let cacheState = [];

const pokemonReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_SUCCES:
      cacheState=action.payload;
      return action.payload;
    case FETCH_FAILURE:
      return state;
    case POKEMON_TYPE:
      return (cacheState.filter((pokemon) => pokemon.type === action.payload));
    default:
      return state;
  };
};

export default pokemonReducer;