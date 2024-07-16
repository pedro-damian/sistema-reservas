import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReservationForm from '../components/ReservationForm';

const Reservations = () => {
  const handleReservationSubmit = (formData) => {
    const existingReservations = JSON.parse(localStorage.getItem('reservations') || '[]');
    const updatedReservations = [...existingReservations, formData];
    localStorage.setItem('reservations', JSON.stringify(updatedReservations));
    alert('Reserva realizada con éxito!');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Hacer una Reserva</h2>
        <ReservationForm onReservationSubmit={handleReservationSubmit} />
      </main>
      <Footer />
    </div>
  );
};

export default Reservations;