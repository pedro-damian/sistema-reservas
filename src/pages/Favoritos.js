import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FavoritosBanner from '../components/FavoritosBanner';
import ImagenBanner from "../assets/bannerMenu.webp"

const Favoritos = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  const removeFavorite = (dishId) => {
    const updatedFavorites = favorites.filter((dish) => dish.id !== dishId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const removeAllFavorites = () => {
    setFavorites([]);
    localStorage.removeItem('favorites');
  };

  return (
    
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header/>
      <FavoritosBanner imageUrl={ImagenBanner} altText="Imagen del menú"/>
      
      {favorites.length > 0 ? (
        <>
          <button
            onClick={removeAllFavorites}
            className="mb-4 bg-red-500 text-white py-2 px-4 rounded"
          >
            Eliminar Todos los Favoritos
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {favorites.map((dish) => (
              <div key={dish.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center">
                <img src={dish.image} alt={dish.name} className="mb-4 w-full h-48 object-cover rounded-lg" />
                <h2 className="text-xl font-bold mb-2">{dish.name}</h2>
                <p className="mb-4">{dish.description}</p>
                <p className="text-lg font-semibold mb-4">{dish.price}</p>
                <button 
                  onClick={() => removeFavorite(dish.id)}
                  className="bg-red-500 text-white py-2 px-4 rounded"
                >
                  Quitar de Favoritos
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>No hay platos favoritos guardados.</p>
      )}
  
    <Footer/>
    </div>
    
  );
};

export default Favoritos;
