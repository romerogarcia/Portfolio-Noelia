import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './App.js';
import About from './components/About/About.js';
import Portafolio from './components/Portafolio/Portafolio';
import Contact from './components/Contact/Contact.js';

import './index.css';
const basename =
  document.querySelector('base')?.getAttribute('href') ??
  'https://romerogarcia.github.io/Portfolio-Noelia/';
ReactDOM.render(
  <BrowserRouter basename={basename}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="portafolio" element={<Portafolio />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>,

  document.getElementById('root')
);
