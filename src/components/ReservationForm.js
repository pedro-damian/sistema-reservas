import React, { useState } from 'react';
import axios from 'axios';

const ReservationForm = ({ onReservationSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    people: 1
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    let formErrors = {};
    if (!/^\d{9}$/.test(formData.phone)) {
      formErrors.phone = 'Numero no valido';
    }
    if (!formData.date) {
      formErrors.date = 'Dato no valido';
    }
    if (!formData.time) {
      formErrors.time = 'Hora no valida';
    }
    if (formData.people <= 0) {
      formErrors.people = 'El número de personas debe ser mayor que 0.';
    }
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      axios.post('http://localhost:8080/api/reservations', formData)
        .then(response => {
          onReservationSubmit(response.data);
          setFormData({
            name: '',
            phone: '',
            date: '',
            time: '',
            people: 1
          });
          setErrors({});
        })
        .catch(error => {
          console.error('Error al guardar la reserva:', error);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Nombre
        </label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Nombre"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
          Teléfono
        </label>
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Teléfono"
        />
        {errors.phone && <p className="text-red-500 text-xs italic">{errors.phone}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
          Fecha
        </label>
        <input
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="date"
        />
        {errors.date && <p className="text-red-500 text-xs italic">{errors.date}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
          Hora
        </label>
        <input
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="time"
        />
        {errors.time && <p className="text-red-500 text-xs italic">{errors.time}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="people">
          Personas
        </label>
        <input
          name="people"
          value={formData.people}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          min="1"
          placeholder="Número de personas"
        />
        {errors.people && <p className="text-red-500 text-xs italic">{errors.people}</p>}
      </div>
      <div className="flex items-center justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Reservar
        </button>
      </div>
    </form>
  );
};

export default ReservationForm;
