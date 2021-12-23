import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as pokemonAction from '../redux/pokemon/actionsCreator';
import store from '../redux/configStore';
import ShowPokemon from '../components/homePageBottom';
import DetailInfo from '../components/details';
import Navbar from '../components/navbar';

afterEach(() => {
  cleanup();
});

describe('Render components to the DOM', () => {
  test('Render Navbar', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </BrowserRouter>,
    );
  });

  test('Render ShowPokemon component', () => {
    const nameToPath = 'pl1-1';
    const pokemon = { name: 'Ampharos' };
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ShowPokemon nameToPath={nameToPath} pokemon={pokemon.name} />
        </Provider>
      </BrowserRouter>,
    );
  });

  test('Render Detail Component', () => {
    const data = {//eslint-disable-line
      name: 'Ampharos',
      id: 'pl1-1',
      pokedex: 181,
      hp: '180',
      type: 'Lightning',
      attack: [{
        name: 'Gigavolt',
      }],
      rarity: 'Rare Holo',
      image: 'https://images.pokemontcg.io/pl1/1.png',
      price: {
        averageSellPrice: 2.69,
      },
    };
    render(
      <BrowserRouter>
        <Provider store={store}>
          <DetailInfo data={
            {
              name: 'Ampharos',
              id: 'pl1-1',
              pokedex: 181,
              hp: '180',
              type: 'Lightning',
              attack: [{
                name: 'Gigavolt',
              }],
              rarity: 'Rare Holo',
              image: 'https://images.pokemontcg.io/pl1/1.png',
              price: {
                averageSellPrice: 2.69,
              },
            }
          }
          />
        </Provider>
      </BrowserRouter>,
    );
  });
});

describe('Test Action creators', () => {
  test('Fetch SUCCES', () => {
    const succes = [{
      id: 'pl1-1',
      name: 'Ampharos',
      nationalPokedexNumbers: [181, 87],
      hp: '180',
      types: ['Lightning'],
      attacks: [{ name: 'Gigavolt' }],
      rarity: 'Rare Holo',
      images: {
        small: 'https://images.pokemontcg.io/pl1/1.png',
      },
      cardmarket: {
        prices: {
          averageSellPrice: 2.69,
        },
      },
    }];
    const action = pokemonAction.succesPokemon(succes);
    expect(action).toEqual({
      type: 'FETCH_SUCCES',
      payload: [{
        id: 'pl1-1',
        name: 'Ampharos',
        pokedex: 181,
        hp: '180',
        type: 'Lightning',
        attack: [{
          name: 'Gigavolt',
        }],
        rarity: 'Rare Holo',
        image: 'https://images.pokemontcg.io/pl1/1.png',
        price: {
          averageSellPrice: 2.69,
        },
      }],
    });
  });

  test('Filter according to a type', () => {
    const type = 'Grass';
    const filter = pokemonAction.chooseType(type);
    expect(filter).toEqual({ type: 'POKEMON_TYPE', payload: 'Grass' });
  });
});
