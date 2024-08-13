import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Reservations from "./pages/Reservaciones";
import MyReservations from "./pages/MyReservations";
import Menu from "./pages/Menu";
import Favoritos from "./pages/Favoritos";
import { ToastContainer } from "react-toastify"; // Mensaje de Registro
import "react-toastify/dist/ReactToastify.css"; // Importa los estilos CSS

const App = () => {
  return (
    <Router>
      <div>
        <ToastContainer />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/my-reservations" element={<MyReservations />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/favorites" element={<Favoritos />} />
      </Routes>
    </Router>
  );
};

export default App;
