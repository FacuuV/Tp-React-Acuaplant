import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  // 1. Creamos el estado para saber si el menú está abierto o no.
  // Inicia en 'false' (cerrado).
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="container-navbar">
      <nav className="navbar container" id="inicio">
        {/* 2. Añadimos el icono de hamburguesa. Al hacerle clic,
            cambiamos el estado de 'isMenuOpen' a su valor contrario. */}
        <i className="fa-solid fa-bars" onClick={() => setIsMenuOpen(!isMenuOpen)}></i>

        {/* 3. Usamos el estado para añadir la clase 'active' al menú si isMenuOpen es true */}
        <ul className={`menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#peces">Peces</a></li>
          <li><a href="#accesorios">Accesorios</a></li>
          <li><a href="#acuarios">Acuarios</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>

        <form className="search-form">
          <input type="search" placeholder="BUSCAR..." />
          <button className="btn-search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </nav>
    </div>
  );
};

export default Navbar;