import React from 'react';
import './Banner.css';
// 1. Importamos la imagen que usaremos para el fondo
import bannerImage from './../../assets/banner.jpg'; // <-- ¡Asegúrate de que esta ruta y nombre sean correctos!

const Banner = () => {
  // 2. Creamos un objeto de estilo para el fondo
  const bannerStyle = {
    backgroundImage: `linear-gradient(100deg, #000000, #00000020), url(${bannerImage})`,
  };

  return (
    // 3. Aplicamos el estilo al elemento de la sección
    <section className="banner" style={bannerStyle}>
      <div className="content-banner">
        <p>Todo los Tipos de Peces</p>
        <h2>
          Comenza en el<br />
          Mundo de la<br />
          Acuariofilia
        </h2>
        <a href="#">Ver Peces</a>
      </div>
    </section>
  );
};

export default Banner;