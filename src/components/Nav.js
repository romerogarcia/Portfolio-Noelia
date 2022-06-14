import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Nav.css';

function Nav() {
  return (
    <nav>
      <p className="home">Welcome to my portfolio!</p>

      <ul className="menu">
        <Link className="link" to="/">
          <li className="home-menu">Home</li>
        </Link>
        <Link className="link" to="/about">
          <li className="about">About me</li>
        </Link>
        <Link className="link" to="/portafolio">
          <li className="portafolio">Projects</li>
        </Link>
        <Link className="link" to="/contact">
          <li className="contact">Contact</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
