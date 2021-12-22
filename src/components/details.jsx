import React from 'react';
import Navbar from './navbar';
import './detail.css';

const DetailInfo = (props) => {
    const { id, name, pokedex, hp, type, attack, rarity, image, price } = props.data;
    return (
      <div key={id}>
        <Navbar name={name} />
        <section className="top-container">
          <div className="top-wrapper">
            <img src={image} alt="Pokemon" />
            <div>
              <p className="top-name">{name}</p>
              <p className="top-pokedex">Pokedex Number: {pokedex}</p>
            </div>
          </div>
          <p className="middle-bar">Hit Power: {hp}</p>
        </section>
        <section className="details-container">
          <div className="d-flex bg-color">
            <p>Type</p>
            <p>{type}</p>
          </div>
          <div className="attack-wrapper bg-color">
            <p className="title-table">List of Attacks</p>
            {attack.map((e) => (
              <div className="d-flex">
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
              <p>$ {price.averageSellPrice}</p>
            </div><div className="d-flex">
              <p>Lowest</p>
              <p>$ {price.lowPrice}</p>
            </div>
            <div className="d-flex">
              <p>Trend</p>
              <p>$ {price.trendPrice}</p>
            </div>
          </div>
        </section>
      </div>
    );

};

export default DetailInfo;
