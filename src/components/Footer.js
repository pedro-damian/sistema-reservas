import React, { useState } from "react";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";
import { FaMapMarkerAlt, FaFacebook, FaTiktok, FaYoutube, FaWhatsapp } from "react-icons/fa";

Modal.setAppElement("#root"); // Para accesibilidad: indica el elemento raíz del app

const Footer = () => {
  const [modalIsOpen, setModalIsOpen] = useState(null);

  const openModal = (modalType) => setModalIsOpen(modalType);
  const closeModal = () => setModalIsOpen(null);

  return (
    <footer className="bg-customDark h-auto py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between text-white">
          {/* Ubicación */}
          <div className="flex-1 mb-6 md:mb-0">
            <h3 className="text-customOrange font-bold py-4 text-lg md:text-xl">
              Ubicación
            </h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <button
                  onClick={() => openModal("location")}
                  className="flex items-center hover:text-yellow-400"
                >
                  <FaMapMarkerAlt />
                  <i className="fa-solid fa-map px-3">Peru, Trujillo</i>
                </button>
              </li>
            </ul>
          </div>
          {/* Acerca de */}
          <div className="flex-1 mb-6 md:mb-0">
            <h3 className="text-customOrange font-bold py-4 text-lg md:text-xl">
              Acerca de
            </h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <button
                  onClick={() => openModal("about")}
                  className="hover:text-yellow-400"
                >
                  Sobre nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() => openModal("info")}
                  className="hover:text-yellow-400"
                >
                  Información de la empresa
                </button>
              </li>
            </ul>
          </div>

          {/* Política */}
          <div className="flex-1">
            <h3 className="text-customOrange font-bold py-4 text-lg md:text-xl">
              Política
            </h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <button
                  onClick={() => openModal("privacy")}
                  className="hover:text-yellow-400"
                >
                  Política y privacidad
                </button>
              </li>
              <li>
                <button
                  onClick={() => openModal("orderHistory")}
                  className="hover:text-yellow-400"
                >
                  Historial de pedidos
                </button>
              </li>

              <li>
                <button
                  onClick={() => openModal("newsletter")}
                  className="hover:text-yellow-400"
                >
                  Boletín informativo
                </button>
              </li>
            </ul>
          </div>
          {/* Ayuda */}
          <div className="flex-1 mb-6 md:mb-0">
            <h3 className="text-customOrange font-bold py-4 text-lg md:text-xl">
              Contactanos
            </h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <a 
                  className="hover:text-yellow-400 flex items-center gap-3"
                >
                  <FaFacebook /> Facebook
                </a>
              </li>
              <li>
                <a
                  className="hover:text-yellow-400 flex items-center gap-3"
                >
                  <FaTiktok /> TikTok
                </a>
              </li>
              
              <li>
                <a
                  className="hover:text-yellow-400 flex items-center gap-3"
                >
                  <FaWhatsapp/> 987654321
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm mt-8 text-gray-300">
          <p>
            &copy; 2024 Rincon Gastronómico - Todos los derechos reservados.
          </p>
        </div>
      </div>

      {/* Modales */}
      <Modal
        isOpen={modalIsOpen === "location"}
        onRequestClose={closeModal}
        className="fixed inset-0 bg-black/75 flex items-center justify-center p-2"
        overlayClassName="fixed inset-0 bg-black/50"
      >
        <div className="bg-white p-4 rounded-lg  md:size-8/12 lg:size-8/12 xl:size-10/12 mx-auto relative">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-gray-700"
          >
            <IoMdClose />
          </button>
          <h2 className="text-2xl font-bold mb-6">Ubicación</h2>
          <div className="relative h-5/6 w-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31599.18226386071!2d-79.0551047776326!3d-8.111889766961202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3d42af3ba51f%3A0xc469bb296e70c1d5!2srestaurante%20El%20rincon%20del%20trujillano!5e0!3m2!1ses-419!2spe!4v1722372340328!5m2!1ses-419!2spe"
              width="100%"
              height="100%"
              style={{border:0}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Modal>

      {/* Repite el modal para otras secciones aquí */}
      {/* Ejemplo para "Acerca de" */}
      <Modal
        isOpen={modalIsOpen === "about"}
        onRequestClose={closeModal}
        className="fixed inset-0 bg-black/75 flex items-center justify-center p-4"
        overlayClassName="fixed inset-0 bg-black/50"
      >
        <div className="bg-white p-8 rounded-lg max-w-md mx-auto relative">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-gray-700"
          >
            <IoMdClose />
          </button>
          <h2 className="text-2xl font-bold mb-4">Sobre Nosotros</h2>
          <p>Aquí puedes colocar información sobre tu empresa.</p>
        </div>
      </Modal>

      {/* Agrega más modales según sea necesario */}
    </footer>
  );
};

export default Footer;
