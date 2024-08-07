import React, { useState } from 'react';

// Importa todas las imágenes de los platos
import cevicheImage from '../assets/dishes/ceviche.jpg';
import lomoSaltadoImage from '../assets/dishes/lomo-saltado.jpg';
import ajiDeGallinaImage from '../assets/dishes/aji-de-gallina.jpg';
import pachamancaImage from '../assets/dishes/pachamanca.webp';
import causaImage from '../assets/dishes/causa.jpg';
import anticuchosImage from '../assets/dishes/anticuchos.jpg';
import rocotoImage from '../assets/dishes/rocoto-relleno.jpg';
import arrozpatoImage from '../assets/dishes/Arroz-con-pato.jpg';
import secocabritoImage from '../assets/dishes/seco-de-cabrito.webp';
import tacuImage from '../assets/dishes/tacu-tacu.jpg';
import pollobrasaImage from '../assets/dishes/pollo-brasa.jpg';
import chupeImage from '../assets/dishes/chupe-de-camaron.jpg';
import carapulcraImage from '../assets/dishes/carapulcra.webp';
import huancainaImage from '../assets/dishes/papa-a-la-huancaina.webp';
import ocopaImage from '../assets/dishes/ocopa.jpg';
import adoboImage from '../assets/dishes/adobo-de-chancho.jpg';
import juaneImage from '../assets/dishes/juane.jpg';
import chorrillanaImage from '../assets/dishes/pescado-chorillana.jpg';
import arrozmariscosImage from '../assets/dishes/arroz_con_mariscos.jpeg';
import tiraditoImage from '../assets/dishes/tiradito.jpg';

const dishes = [
  { id: 1, name: 'Ceviche', description: 'Plato de pescado crudo marinado en jugo de limón con cebolla, ají, y cilantro.', price: 'S/ 35.00', image: cevicheImage},
  { id: 2, name: 'Lomo Saltado', description: 'Salteado de carne con papas fritas, cebolla, tomate y ají.', price: 'S/ 40.00', image: lomoSaltadoImage },
  { id: 3, name: 'Ají de Gallina', description: 'Guiso de pollo desmenuzado con una salsa a base de ají amarillo y nueces.', price: 'S/ 30.00', image: ajiDeGallinaImage },
  { id: 4, name: 'Pachamanca', description: 'Plato andino cocido bajo tierra con piedras calientes.', price: 'S/ 50.00', image: pachamancaImage },
  { id: 5, name: 'Causa Rellena', description: 'Purée de papa amarilla relleno con pollo o atún.', price: 'S/ 25.00', image: causaImage },
  { id: 6, name: 'Anticuchos', description: 'Brochetas de corazón de res marinadas y asadas.', price: 'S/ 20.00', image: anticuchosImage },
  { id: 7, name: 'Rocoto Relleno', description: 'Pimientos picantes rellenos con carne y verduras.', price: 'S/ 28.00', image: rocotoImage },
  { id: 8, name: 'Arroz con Pato', description: 'Arroz cocido con cilantro y pato.', price: 'S/ 45.00', image: arrozpatoImage },
  { id: 9, name: 'Seco de Cabrito', description: 'Estofado de cabrito con hierbas y chicha de jora.', price: 'S/ 38.00', image: secocabritoImage },
  { id: 10, name: 'Tacu Tacu', description: 'Frejoles y arroz cocidos y fritos juntos.', price: 'S/ 22.00', image: tacuImage },
  { id: 11, name: 'Pollo a la Brasa', description: 'Pollo asado al estilo peruano.', price: 'S/ 32.00', image: pollobrasaImage },
  { id: 12, name: 'Chupe de Camarones', description: 'Sopa espesa de camarones con papas, leche y queso.', price: 'S/ 35.00', image: chupeImage },
  { id: 13, name: 'Carapulcra', description: 'Guiso de papa seca con carne de cerdo y maní.', price: 'S/ 30.00', image: carapulcraImage },
  { id: 14, name: 'Papa a la Huancaína', description: 'Papas con salsa de queso y ají.', price: 'S/ 18.00', image: huancainaImage },
  { id: 15, name: 'Ocopa', description: 'Papas con salsa de huacatay, ají, y maní.', price: 'S/ 18.00', image: ocopaImage },
  { id: 16, name: 'Adobo de Cerdo', description: 'Estofado de cerdo marinado en ají y chicha.', price: 'S/ 35.00', image: adoboImage },
  { id: 17, name: 'Juane', description: 'Arroz y carne envueltos en hojas de bijao.', price: 'S/ 25.00', image: juaneImage },
  { id: 18, name: 'Pescado a la Chorrillana', description: 'Pescado frito con salsa de cebolla, tomate y ají.', price: 'S/ 30.00', image: chorrillanaImage },
  { id: 19, name: 'Arroz con Mariscos', description: 'Arroz cocido con mariscos y especias.', price: 'S/ 40.00', image: arrozmariscosImage },
  { id: 20, name: 'Tiradito', description: 'Pescado crudo en finas láminas con salsa de ají.', price: 'S/ 35.00', image: tiraditoImage },
];

const Cards = () => {
  const [favorites, setFavorites] = useState([]);

  const handleFavorite = (dish) => {
    setFavorites((prevFavorites) => {
      let updatedFavorites;
      if (prevFavorites.includes(dish)) {
        updatedFavorites = prevFavorites.filter((favorite) => favorite !== dish);
      } else {
        updatedFavorites = [...prevFavorites, dish];
      }
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {dishes.map((dish) => (
        <div key={dish.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center">
          <img src={dish.image} alt={dish.name} className="mb-4 w-full h-48 object-cover rounded-lg" />
          <h2 className="text-xl font-bold mb-2">{dish.name}</h2>
          <p className="mb-4">{dish.description}</p>
          <p className="text-lg font-semibold mb-4">{dish.price}</p>
          <button 
            onClick={() => handleFavorite(dish)}
            className={`py-2 px-4 rounded ${
              favorites.includes(dish) ? 'bg-red-500 text-white' : 'bg-gray-300 text-black'
            }`}
          >
            {favorites.includes(dish) ? 'Quitar de Favoritos' : 'Añadir a Favoritos'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cards;
