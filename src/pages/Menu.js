import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/MenuBanner';
import Cards from '../components/MenuCard';
import ImagenBanner from "../assets/bannerMenu.webp"



const Menu = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <Banner imageUrl={ImagenBanner} altText="Imagen del menú" />
    <main className="flex-grow container mx-auto px-4 py-8">
      <Cards/>
    </main>
    <Footer />
  </div>
);

export default Menu;