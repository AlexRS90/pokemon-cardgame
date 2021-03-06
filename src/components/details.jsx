import React from 'react';
import PropTypes from 'prop-types';
import './detail.css';
import Navbar from './navbar';

const DetailInfo = ({
  data: {
    name, id, pokedex, hp, type, attack, rarity, image, price,
  },
}) => (
  <div key={id}>
    <Navbar name={name} />
    <div data-testid="testingDetail">
      <section className="top-container">
        <div className="top-wrapper">
          <img src={image} alt="Pokemon" />
          <div>
            <p className="top-name">{name}</p>
            <p className="top-pokedex">
              Pokedex Number:
              {pokedex}
            </p>
          </div>
        </div>
        <p className="middle-bar">
          Hit Power:
          {hp}
        </p>
      </section>
      <section className="details-container">
        <div className="d-flex bg-color">
          <p>Type</p>
          <p>{type}</p>
        </div>
        <div className="attack-wrapper bg-color">
          <p className="title-table">List of Attacks</p>
          {attack.map((e) => (
            <div key={e.name} className="d-flex">
              <p>Attack</p>
              <p>{e.name}</p>
            </div>
          ))}
        </div>
        <div className="d-flex bg-color">
          <p>Rarity</p>
          <p>{rarity}</p>
        </div>
        <div className="price-wrapper bg-color">
          <p className="title-table">Card Price in USD</p>
          <div className="d-flex">
            <p>Average</p>
            <p>
              $
              {price.averageSellPrice}
            </p>
          </div>
          <div className="d-flex">
            <p>Lowest</p>
            <p>
              $
              {price.lowPrice}
            </p>
          </div>
          <div className="d-flex">
            <p>Trend</p>
            <p>
              $
              {price.trendPrice}
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
);

DetailInfo.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.string,
    PropTypes.string,
    PropTypes.number,
    PropTypes.string,
    PropTypes.string,
    PropTypes.array,
    PropTypes.string,
    PropTypes.string,
    PropTypes.object,
  ),
  name: PropTypes.string,
  id: PropTypes.string,
  pokedex: PropTypes.number,
  hp: PropTypes.string,
  type: PropTypes.string,
  attack: PropTypes.arrayOf(PropTypes.object),
  rarity: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.objectOf(PropTypes.string),
};

DetailInfo.defaultProps = {
  data: {},
  id: '',
  name: '',
  pokedex: 0,
  hp: '',
  type: '',
  attack: [{}],
  rarity: '',
  image: '',
  price: {},
};

export default DetailInfo;
