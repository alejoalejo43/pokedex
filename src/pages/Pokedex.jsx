import React from 'react';
import { useSelector } from 'react-redux';

const Pokedex = () => {
  const nameTrainer = useSelector((state) => state.nameTrainer);

  return (
    <main>
      <header>
        <h1>Pokedex</h1>
        <p>
          Welcome <span>{nameTrainer}</span>, here you can find your favorite
          pokemon
        </p>
      </header>
    </main>
  );
};

export default Pokedex;
