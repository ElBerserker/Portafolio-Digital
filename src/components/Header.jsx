import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="text-2xl">Raul Hernandez </h1>
      <nav>
        <NavLink to="/" className="mr-4" activeClassName="text-yellow-500">Home</NavLink>
        <NavLink to="/projects" className="mr-4" activeClassName="text-yellow-500">Projects</NavLink>
        <NavLink to="/contact" activeClassName="text-yellow-500">Contact</NavLink>
      </nav>
    </header>
  );
};

export default Header;

