import React from 'react';

const DetailInfo = (props) => {
    console.log(props.data);
    const { id, name, pokedex, hp, type, attack, rarity, image, price } = props.data;
    return (
      <>
        <section>
          <div>
            <img src={image} alt="Pokemon" />
            <p>{name}</p>
            <p>Pokedex Number: {pokedex}</p>
          </div>
          <p>Hit Power: {hp}</p>
        </section>
        <section>
          
        </section>
      </>
    );

};

export default DetailInfo;
