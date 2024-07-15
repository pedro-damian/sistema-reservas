import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"

const Header = () => (
  <header className="bg-customDark opacity-90 shadow-md">
    <div className="container mx-auto px-4 py-6 flex items-center justify-between">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
        <h1 className="text-xl font-bold text-gray-50">Rincon Gastronomico</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-gray-300 hover:text-gray-50">Inicio</Link></li>
          <li><Link to="/reservations" className="text-gray-300 hover:text-gray-50">Reservas</Link></li>
          <li><Link to="/my-reservations" className="text-gray-300 hover:text-gray-50">Mis Reservas</Link></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;