import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FavoritosBanner from '../components/FavoritosBanner';
import ImagenBanner from "../assets/bannerMenu.webp"
import Cards from '../components/Card';

const Favoritos = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  return (
    
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header/>
      <FavoritosBanner imageUrl={ImagenBanner} altText="Imagen del menú"/>
      <Cards dishes={favorites} />
    <Footer/>
    </div>
  );
};

export default Favoritos;
