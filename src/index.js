import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './App.js';
import About from './components/About.js';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact.js';

import './styles/index.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="portafolio" element={<Portfolio />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>,

  document.getElementById('root')
);
