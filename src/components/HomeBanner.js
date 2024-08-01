import React from "react";
import { Link } from "react-router-dom";
import ImagenBanner from "../assets/banner.png";

const HomeBanner = () => (
  <div className="relative h-screen w-full">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${ImagenBanner})` }}
    ></div>
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-center">
        Rincón Gastronómico
      </h1>
      <div className="flex gap-4">
        <Link
          to="/menu"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full text-xl transition duration-300 ease-in-out transform hover:scale-105"
        >
          Ver Menú
        </Link>
        <Link
          to="/reservations"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full text-xl transition duration-300 ease-in-out transform hover:scale-105"
        >
          Reservas
        </Link>
      </div>
    </div>
  </div>
);

export default HomeBanner;
