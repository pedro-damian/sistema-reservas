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
      <nav className="flex-grow">
        <ul className="flex justify-center space-x-4 gap-3">
          <li><Link to="/" className="text-gray-300 hover:text-blue-500">Inicio</Link></li>
          <li><Link to="/menu" className="text-gray-300 hover:text-gray-800">Menú</Link></li>
          <li><Link to="/reservations" className="text-gray-300 hover:text-blue-500">Reservas</Link></li>
          <li><Link to="/my-reservations" className="text-gray-300 hover:text-blue-500">Mis Reservas</Link></li>
        </ul>
      </nav>
      <div className="flex items-center space-x-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Registro
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Login
        </button>
      </div>
    </div>
  </header>
);

export default Header;