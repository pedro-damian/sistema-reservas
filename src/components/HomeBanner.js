import React from 'react';
import { Link } from 'react-router-dom';
import ImagenBanner from "../assets/banner.png"

const HomeBanner = () => (
  <div className="relative h-screen w-full overflow-hidden">
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('../assets/banner.png')",
        filter: "brightness(50%)"
      }}
    ></div>
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-center">
        Rincón Gastronómico
      </h1>
      <Link 
        to="/menu" 
        className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full text-xl transition duration-300 ease-in-out transform hover:scale-105"
      >
        Ver Menú
      </Link>
    </div>
  </div>
);

export default HomeBanner;