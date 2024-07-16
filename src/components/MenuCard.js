import React from 'react';

const MenuCard = ({ name, description, price, imageUrl }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-bold text-xl mb-2">{name}</h3>
      <p className="text-gray-700 text-base mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-gray-900 font-bold">${price.toFixed(2)}</span>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Ordenar
        </button>
      </div>
    </div>
  </div>
);

export default MenuCard;