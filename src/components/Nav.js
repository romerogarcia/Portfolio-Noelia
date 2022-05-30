import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Nav.css';

function Nav() {
  return (
    <nav>
      <p className="home">Welcome to my portfolio!</p>

      <ul className="menu">
        <Link className="link" to="/">
          <li className="home-menu">Inicio</li>
        </Link>
        <Link className="link" to="/about">
          <li className="about">Sobre mi</li>
        </Link>
        <Link className="link" to="/portafolio">
          <li className="portafolio">Portafolio</li>
        </Link>
        <Link className="link" to="/contact">
          <li className="contact">Contacto</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
