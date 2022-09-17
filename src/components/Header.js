import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>todos</h1>
      <NavLink>
        <a className="about">about</a>
      </NavLink>
    </header>
  );
};

export default Header;
