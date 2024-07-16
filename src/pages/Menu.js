import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/MenuBanner';
import MenuCard from '../components/MenuCard';
import ImagenBanner from "../assets/bannerMenu.webp"

// Datos de ejemplo para los platos del menú
const menuItems = [
  {
    id: 1,
    name: "Pasta Carbonara",
    description: "Espaguetis con salsa cremosa de huevo, queso parmesano y panceta.",
    price: 12.99,
    imageUrl: "/api/placeholder/300/200",
  },
  {
    id: 2,
    name: "Ensalada César",
    description: "Lechuga romana, crutones, queso parmesano y aderezo César.",
    price: 8.99,
    imageUrl: "/api/placeholder/300/200",
  },
  {
    id: 3,
    name: "Filete de Salmón",
    description: "Filete de salmón a la parrilla con verduras de temporada.",
    price: 16.99,
    imageUrl: "/api/placeholder/300/200",
  },
  // Agrega más platos según sea necesario
];

const Menu = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <Banner imageUrl={ImagenBanner} altText="Imagen del menú" />
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <MenuCard
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default Menu;