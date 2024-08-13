import React, { useState } from "react";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";
import {
  FaMapMarkerAlt,
  FaFacebook,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

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
                <a className="hover:text-yellow-400 flex items-center gap-3">
                  <FaFacebook /> Facebook
                </a>
              </li>
              <li>
                <a className="hover:text-yellow-400 flex items-center gap-3">
                  <FaTiktok /> TikTok
                </a>
              </li>

              <li>
                <a className="hover:text-yellow-400 flex items-center gap-3">
                  <FaWhatsapp /> 987654321
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
              style={{ border: 0 }}
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
        <div className="bg-white p-8 rounded-lg w-11/12 md:w-3/4 lg:w-1/2 xl:w-2/3 mx-auto relative max-h-screen overflow-y-auto">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-gray-700"
          >
            <IoMdClose />
          </button>
          <h2 className="text-2xl font-bold mb-4">Sobre Nosotros</h2>
          <div className="text-gray-700">
            <p>
              <strong>Nuestra Historia</strong>
            </p>
            <p>
              Rincón Gastronómico nació de la pasión por la buena comida y la
              hospitalidad. Desde nuestros humildes comienzos, hemos crecido
              hasta convertirnos en un lugar de encuentro para los amantes de la
              gastronomía, ofreciendo una experiencia culinaria única y
              memorable.
            </p>

            <p>
              <strong>Nuestra Misión</strong>
            </p>
            <p>
              En Rincón Gastronómico, nuestra misión es proporcionar a nuestros
              clientes una experiencia culinaria excepcional, combinando
              ingredientes frescos, recetas innovadoras y un servicio de primera
              clase. Nos esforzamos por crear un ambiente acogedor y agradable
              donde cada visita sea una ocasión especial.
            </p>

            <p>
              <strong>Nuestro Equipo</strong>
            </p>
            <p>
              Contamos con un equipo de chefs talentosos y personal dedicado que
              comparte nuestra pasión por la comida y el servicio al cliente.
              Cada miembro de nuestro equipo aporta su experiencia y creatividad
              para ofrecer platos deliciosos y un servicio impecable.
            </p>

            <p>
              <strong>Nuestros Valores</strong>
            </p>
            <ul className="list-disc pl-5">
              <li>
                <strong>Calidad</strong>: Utilizamos solo los ingredientes más
                frescos y de la más alta calidad.
              </li>
              <li>
                <strong>Innovación</strong>: Nos esforzamos por crear platos
                innovadores y emocionantes.
              </li>
              <li>
                <strong>Servicio</strong>: Nos comprometemos a proporcionar un
                servicio al cliente excepcional.
              </li>
              <li>
                <strong>Sostenibilidad</strong>: Apoyamos prácticas sostenibles
                y nos esforzamos por reducir nuestro impacto ambiental.
              </li>
            </ul>
          </div>
        </div>
      </Modal>


      <Modal
        isOpen={modalIsOpen === "info"}
        onRequestClose={closeModal}
        className="fixed inset-0 bg-black/75 flex items-center justify-center p-4"
        overlayClassName="fixed inset-0 bg-black/50"
      >
        <div className="bg-white p-8 rounded-lg w-11/12 md:w-3/4 lg:w-1/2 xl:w-2/3 mx-auto relative max-h-screen overflow-y-auto">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-gray-700"
          >
            <IoMdClose />
          </button>
          <h2 className="text-2xl font-bold mb-4">Información de la Empresa</h2>
          <div className="text-gray-700">
            <p>
              <strong>Quiénes Somos</strong>
            </p>
            <p>
              Rincón Gastronómico es una empresa dedicada a ofrecer experiencias
              culinarias únicas y de alta calidad. Fundada en 2023, hemos
              crecido rápidamente para convertirnos en un referente en la
              gastronomía local.
            </p>

            <p>
              <strong>Nuestra Visión</strong>
            </p>
            <p>
              Ser reconocidos como el mejor restaurante en la región, ofreciendo
              una combinación única de sabores, servicio de calidad y un
              ambiente acogedor. Queremos ser el lugar preferido para
              celebraciones especiales y momentos inolvidables.
            </p>

            <p>
              <strong>Nuestros Servicios</strong>
            </p>
            <ul className="list-disc pl-5">
              <li>
                <strong>Restaurante</strong>: Ofrecemos una amplia variedad de
                platos, desde entrantes hasta postres, todos preparados con
                ingredientes frescos y de calidad.
              </li>
              <li>
                <strong>Eventos</strong>: Organizamos eventos especiales,
                incluyendo bodas, cumpleaños y reuniones corporativas.
              </li>
              <li>
                <strong>Reservaciones</strong>: Facilidades para hacer
                reservaciones en línea, asegurando una experiencia sin
                complicaciones para nuestros clientes.
              </li>
            </ul>
            <p>
              <strong>Rincón Gastronómico</strong>
            </p>
            <p>Peru, Trujillo</p>
            <p>Correo electrónico: rincongastronomico@gmail.com</p>
            <p>Teléfono: 987654321</p>

            <p>
              <em>Estamos aquí para servirte y hacer de tu experiencia gastronómica
              algo verdaderamente especial.</em>
            </p>
          </div>
        </div>
      </Modal>
      // contenido de la Política de Privacidad al modal
      <Modal
        isOpen={modalIsOpen === "privacy"}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center p-4"
        overlayClassName="fixed inset-0 bg-black/50"
      >
        <div className="bg-white p-8 rounded-lg w-11/12 md:w-3/4 lg:w-1/2 xl:w-2/3 mx-auto relative max-h-screen overflow-y-auto">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-gray-700"
          >
            <IoMdClose />
          </button>
          <h2 className="text-2xl font-bold mb-4">Política y Privacidad</h2>
          <div className="text-gray-700">
            <p>
              <strong>Introducción</strong>
            </p>
            <p>
              En Rincón Gastronómico, nos comprometemos a proteger la privacidad
              de nuestros clientes. Esta Política de Privacidad describe cómo
              recopilamos, usamos y compartimos su información personal cuando
              utiliza nuestro sitio web y realiza reservaciones.
            </p>

            <p>
              <strong>Información que Recopilamos</strong>
            </p>
            <p>
              Cuando realiza una reservación a través de nuestro sitio web,
              podemos recopilar la siguiente información personal:
            </p>
            <ul className="list-disc pl-5">
              <li>
                <strong>Nombre</strong>: Para identificar su reservación.
              </li>
              <li>
                <strong>Número de teléfono</strong>: Para contactarlo en caso de
                cualquier cambio o confirmación de su reservación.
              </li>
              <li>
                <strong>Fecha y hora de la reservación</strong>: Para asegurar
                que su mesa esté lista a su llegada.
              </li>
              <li>
                <strong>Número de personas</strong>: Para acomodar adecuadamente
                su grupo.
              </li>
              <li>
                <strong>Dirección de correo electrónico</strong>: Opcionalmente,
                para enviarle confirmaciones y actualizaciones de su
                reservación.
              </li>
            </ul>

            <p>
              <strong>Uso de la Información</strong>
            </p>
            <p>Utilizamos la información que recopilamos para:</p>
            <ul className="list-disc pl-5">
              <li>Procesar y gestionar sus reservaciones.</li>
              <li>Comunicarnos con usted sobre su reservación.</li>
              <li>
                Mejorar nuestros servicios y la experiencia del usuario en
                nuestro sitio web.
              </li>
              <li>Cumplir con nuestras obligaciones legales.</li>
            </ul>

            <p>
              <strong>Compartir la Información</strong>
            </p>
            <p>
              No compartimos su información personal con terceros, excepto en
              las siguientes circunstancias:
            </p>
            <ul className="list-disc pl-5">
              <li>
                <strong>Con proveedores de servicios</strong>: que nos ayudan a
                operar nuestro sitio web y manejar las reservaciones, bajo
                estrictas obligaciones de confidencialidad.
              </li>
              <li>
                <strong>Por razones legales</strong>: cuando sea necesario para
                cumplir con la ley, responder a una citación o proteger los
                derechos, propiedad o seguridad de Rincón Gastronómico, nuestros
                clientes u otros.
              </li>
            </ul>

            <p>
              <strong>Seguridad</strong>
            </p>
            <p>
              Tomamos medidas razonables para proteger su información personal
              contra acceso no autorizado, uso o divulgación. Sin embargo,
              ninguna transmisión de datos a través de Internet es completamente
              segura y no podemos garantizar la seguridad absoluta de su
              información.
            </p>

            <p>
              <strong>Sus Derechos</strong>
            </p>
            <p>Usted tiene derecho a:</p>
            <ul className="list-disc pl-5">
              <li>Acceder a su información personal que tenemos.</li>
              <li>
                Solicitar la corrección de cualquier información personal
                incorrecta o incompleta.
              </li>
              <li>
                Solicitar la eliminación de su información personal, sujeto a
                ciertas excepciones legales.
              </li>
              <li>
                Oponerse al procesamiento de su información personal en
                determinadas circunstancias.
              </li>
            </ul>

            <p>
              <strong>Cambios a esta Política de Privacidad</strong>
            </p>
            <p>
              Podemos actualizar esta Política de Privacidad ocasionalmente.
              Publicaremos cualquier cambio en esta página y actualizaremos la
              fecha de "Última actualización" en la parte superior de esta
              política.
            </p>

            <p>
              <strong>Contacto</strong>
            </p>
            <p>
              Si tiene alguna pregunta o inquietud sobre esta Política de
              Privacidad o nuestras prácticas de privacidad, puede contactarnos
              en:
            </p>
            <p>
              <strong>Rincón Gastronómico</strong>
            </p>
            <p>Peru, Trujillo</p>
            <p>Correo electrónico: rincongastronomico@gmail.com</p>
            <p>Teléfono: 987654321</p>

            <p>
              Gracias por confiar en Rincón Gastronómico. Su privacidad es
              importante para nosotros.
            </p>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={modalIsOpen === "newsletter"}
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
          <h2 className="text-2xl font-bold mb-4">Boletin Informativo</h2>
          <p>En pleno Mantenimiento, aun sin Boletines</p>
        </div>
      </Modal>
    </footer>
  );
};

export default Footer;
