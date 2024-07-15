import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => (
  <div className="min-h-screen bg-gray-100 flex flex-col">
    <Header />
    <main className="flex-grow container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Bienvenido a Mi Restaurante</h2>
      <p className="text-gray-600">Disfruta de una experiencia culinaria única. Reserva tu mesa ahora.</p>
    </main>
    <Footer />
  </div>
);

export default Home;