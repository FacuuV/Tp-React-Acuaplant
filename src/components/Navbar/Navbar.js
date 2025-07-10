import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="container-navbar">
      <nav className="navbar container" id="inicio">
        <ul className="menu">
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

