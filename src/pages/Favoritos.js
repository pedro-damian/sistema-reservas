import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Favoritos = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Favoritos</h2>
        {favorites.length === 0 ? (
          <p>No tienes platos favoritos actualmente.</p>
        ) : (
          <ul className="space-y-4">
            {favorites.map((dish, index) => (
              <li key={index} className="bg-white shadow rounded-lg p-4">
                <p><strong>Nombre:</strong> {dish.name}</p>
                <p><strong>Descripción:</strong> {dish.description}</p>
                <p><strong>Precio:</strong> {dish.price}</p>
              </li>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Favoritos;
