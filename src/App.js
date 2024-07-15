import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Reservations from './pages/Reservaciones';
import MyReservations from './pages/MyReservations';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/my-reservations" element={<MyReservations />} />
      </Routes>
    </Router>
  );
}

export default App;
