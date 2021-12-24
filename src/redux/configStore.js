import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import pokemonReducer from './pokemon/reducer';

const store = createStore(pokemonReducer, applyMiddleware(logger, thunk));

export default store;
