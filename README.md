# Rincón Gastronómico

Rincón Gastronómico es una aplicación web para un restaurante que permite a los usuarios ver el menú, hacer reservaciones y ver sus reservaciones existentes.

## Características

- **Página de Inicio**: Presenta un banner atractivo con un enlace al menú.
- **Formulario de Reservaciones**: Permite a los usuarios realizar reservaciones ingresando su nombre, teléfono, fecha, hora y número de personas.
- **Mis Reservaciones**: Muestra una lista de todas las reservaciones realizadas por el usuario.
- **Pie de Página**: Contiene enlaces útiles como Ubicación, Acerca de, Ayuda y Política, cada uno con modales que proporcionan información adicional.

## Tecnologías Utilizadas

- **React**: Librería de JavaScript para construir la interfaz de usuario.
- **React Router**: Para el manejo de rutas en la aplicación.
- **Tailwind CSS**: Framework de CSS para estilos.
- **Axios**: Librería para hacer solicitudes HTTP.
- **Google Maps Embed API**: Para mostrar la ubicación del restaurante en un mapa dentro de un modal.

## Instalación y Ejecución

Para instalar y ejecutar el proyecto localmente, sigue estos pasos:

1. Clona el repositorio:
    ```sh
        git clone https://github.com/tu-usuario/aluraflix.git
    ```
2. Navega al directorio del proyecto:
    ```sh
        cd sistema-reservas
    ```
3. Instala las dependencias:
    ```sh
        npm install
    ```
4. Instala react-router-dom:
    ```sh
        npm i react-router-dom
    ```
5. Instala react-icons:
    ```sh
        npm install react-icons
    ```
6. Instala react-modal:
    ```sh
        npm install react-modal
    ```
7. [Instala Tailwindcss](https://tailwindcss.com/docs/guides/create-react-app):
    ```sh
        npm install -D tailwindcss
        npx tailwindcss init
    ```
8. Instala Axios:
    ```sh
        npm i axios
    ```

9. Inicia la aplicación:
    ```sh
        npm start
    ```

## Estructura del Proyecto

- **src/components:** Contiene los componentes reutilizables de la aplicación como Header, Footer, HomeBanner, ReservationForm.
- **src/pages:** Contiene las páginas de la aplicación como Home, Reservations, MyReservations.
- **src/assets:** Contiene los recursos estáticos como imágenes.
- **src/App.js:** El componente principal que maneja las rutas.



## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Realiza un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

¡Gracias por usar sistema de reservas! Si tienes alguna pregunta o sugerencia, no dudes en abrir un issue o enviar un pull request.



