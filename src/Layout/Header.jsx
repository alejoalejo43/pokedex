import React from 'react';
import './styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <img className="header__img" src="/public/images/pokedex.png" alt="" />
      <div className="header__black"></div>
      <div className="header__circle"></div>
      <div className="header__circle-int"></div>
    </header>
  );
};

export default Header;
