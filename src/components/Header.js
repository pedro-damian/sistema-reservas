import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-customDark opacity-90 shadow-md">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <div
            className="h-10 w-10 mr-2 bg-cover bg-center"
            style={{ backgroundImage: `url(${logo})` }}
          ></div>
          <h1 className="text-xl font-bold text-gray-50">Rincon Gastronomico</h1>
        </div>
        <div className="hidden md:flex justify-center flex-grow">
          <nav>
            <ul className="flex space-x-4 gap-10 font-bold">
              <li><Link to="/" className="text-gray-300 hover:text-yellow-500">Inicio</Link></li>
              <li><Link to="/menu" className="text-gray-300 hover:text-yellow-500">Menú</Link></li>
              <li><Link to="/reservations" className="text-gray-300 hover:text-yellow-500">Reservas</Link></li>
              <li><Link to="/my-reservations" className="text-gray-300 hover:text-yellow-500">Mis Reservas</Link></li>
              <li><Link to="/favorites" className="text-gray-300 hover:text-yellow-500">Mis Favoritos</Link></li>
            </ul>
          </nav>
        </div>
        <div className="hidden md:flex items-center space-x-2 ml-auto">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Registro
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Login
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-300 hover:text-yellow-500 focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-customDark opacity-90">
        <ul className="flex flex-col items-center space-y-4 font-bold py-4">
          <li><Link to="/" className="text-gray-300 hover:text-yellow-500" onClick={toggleMenu}>Inicio</Link></li>
          <li><Link to="/menu" className="text-gray-300 hover:text-yellow-500" onClick={toggleMenu}>Menú</Link></li>
          <li><Link to="/reservations" className="text-gray-300 hover:text-yellow-500" onClick={toggleMenu}>Reservas</Link></li>
          <li><Link to="/my-reservations" className="text-gray-300 hover:text-yellow-500" onClick={toggleMenu}>Mis Reservas</Link></li>
          <li><Link to="/favorites" className="text-gray-300 hover:text-yellow-500" onClick={toggleMenu}>Favoritos</Link></li>
          <li><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">Registro</button></li>
          <li><button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full">Login</button></li>
        </ul>
      </div>
      )}
    </header>
  );
};

export default Header;
