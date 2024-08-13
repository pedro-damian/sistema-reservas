import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

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

  const handleCancelReservation = (id) => {
    if (window.confirm('¿Estás seguro de que deseas cancelar esta reserva?')) {
      axios.delete(`http://localhost:8080/api/reserva/${id}`)
        .then(() => {
          setReservations(reservations.filter(reservation => reservation.id !== id));
          alert('Reserva cancelada con éxito.');
        })
        .catch(error => {
          console.error('Error cancelando la reserva:', error);
        });
    }
  };

  const handleUpdateReservation = (id) => {
    const newTime = prompt('Ingresa la nueva hora de la reserva:', '');
    if (newTime) {
      axios.put(`http://localhost:8080/api/reservas/${id}`, { time: newTime })
        .then(() => {
          setReservations(reservations.map(reservation => 
            reservation.id === id ? { ...reservation, time: newTime } : reservation
          ));
          alert('Reserva actualizada con éxito.');
        })
        .catch(error => {
          console.error('Error actualizando la reserva:', error);
        });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Mis Reservas</h2>
        {reservations.length === 0 ? (
          <p className="text-lg text-gray-600">No tienes reservas actualmente.</p>
        ) : (
          <ul className="space-y-6">
            {reservations.map((reservation) => (
              <li key={reservation.id} className="bg-white shadow rounded-lg p-6 flex justify-between items-center">
                <div>
                  <p className="text-lg font-semibold"><strong>Nombre:</strong> {reservation.name}</p>
                  <p className="text-lg"><strong>Teléfono:</strong> {reservation.phone}</p>
                  <p className="text-lg"><strong>Fecha:</strong> {reservation.date}</p>
                  <p className="text-lg"><strong>Hora:</strong> {reservation.time}</p>
                  <p className="text-lg"><strong>Personas:</strong> {reservation.people}</p>
                </div>
                <div className="flex space-x-4">
                  <button 
                    onClick={() => handleUpdateReservation(reservation.id)} 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
                  >
                    <FaEdit className="mr-2" /> Actualizar
                  </button>
                  <button 
                    onClick={() => handleCancelReservation(reservation.id)} 
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center"
                  >
                    <FaTrashAlt className="mr-2" /> Cancelar
                  </button>
                </div>
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
