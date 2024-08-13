import React, { useState, useEffect } from 'react';
import { FaHeart, FaRegHeart  } from "react-icons/fa";


const Cards = ({dishes = []}) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);


  const handleFavorite = (dish) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((favorite) => favorite.id === dish.id);
      let updatedFavorites;
      if (isFavorite) {
        updatedFavorites = prevFavorites.filter((favorite) => favorite.id !== dish.id);
      } else {
        updatedFavorites = [...prevFavorites, dish];
      }
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  /* if (!Array.isArray(dishes)) {
    console.error('Expected dishes to be an array, but got:', dishes);
    return <p>Hubo un problema al cargar los platos.</p>;
  } */

  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {dishes.length > 0 ? (
        dishes.map((dish) => (
        <div key={dish.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center">
          <img src={dish.image} alt={dish.name} className="mb-4 w-full h-48 object-cover rounded-lg" />
          <h2 className="text-xl font-bold mb-2">{dish.name}</h2>
          <p className="mb-4">{dish.description}</p>
          <p className="text-lg font-semibold mb-4">{dish.price}</p>
          <button 
            onClick={() => handleFavorite(dish)}
            className={`py-2 px-4 rounded text-2xl ${
              favorites.some((favorite) => favorite.id === dish.id) ? 'text-red-500' : 'text-gray-400'
            }`}
          >
              {favorites.some((favorite) => favorite.id === dish.id) ? <FaHeart /> : <FaRegHeart />}
          </button>
        </div>
      ))
      ) : (
      <p>No hay platos favoritos.</p>
      )}
    </div>
  );
};

export default Cards;
