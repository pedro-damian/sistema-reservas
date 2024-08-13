import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MyReservations = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/reservas')
      .then(response => {
        setReservations(response.data);
      })
      .catch(error => {
        console.error('Error fetching reservations:', error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Mis Reservas</h2>
        {reservations.length === 0 ? (
          <p>No tienes reservas actualmente.</p>
        ) : (
          <ul className="space-y-4">
            {reservations.map((reservation, index) => (
              <li key={index} className="bg-white shadow rounded-lg p-4">
                <p><strong>Nombre:</strong> {reservation.name}</p>
                <p><strong>Teléfono:</strong> {reservation.phone}</p>
                <p><strong>Fecha:</strong> {reservation.date}</p>
                <p><strong>Hora:</strong> {reservation.time}</p>
                <p><strong>Personas:</strong> {reservation.people}</p>
              </li>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default MyReservations;
