import React from 'react';

const FavoritosBanner = ({ imageUrl, altText }) => (
  <div className="w-full h-64 md:h-80 lg:h-96 relative overflow-hidden">
    <img
      src={imageUrl}
      alt={altText}
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
        Mis Favoritos
      </h1>
    </div>
  </div>
);

export default FavoritosBanner;