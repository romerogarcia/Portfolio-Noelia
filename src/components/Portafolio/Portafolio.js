import React from 'react';

import Nav from '../Nav/Nav';
import Project from './Project';

import './Portafolio.css';

function Portafolio() {
  const proyectos = [
    {
      id: 1,
      nombre: 'Rick and Morty',
      leng: 'HTML, CSS, JS, API, REACT',
      desc: 'Buscador web de una API sobre los personajes de la serie Rick and Morty, donde podemos filtar por nombre, género y estatus',
      url: 'https://romerogarcia.github.io/Rick-and-Morty/',
      github: 'https://github.com/romerogarcia/Rick-and-Morty',
    },
    {
      id: 2,
      nombre: 'Refactorización: Awesome Profile Cards',
      leng: 'Node JS y SQL',
      desc: 'Refactorización con React de un proyecto heredado. Creación de un servidor básico, una base de datos y publicación en Heroku',
      url: 'https://project-module-4-team-6.herokuapp.com/',
      github:
        'https://github.com/romerogarcia/Refactoring-Awesome-Profile-Cards',
    },
    {
      id: 3,
      nombre: 'Owen Wilson´s WOW',
      leng: 'HTML, CSS, JS, API, REACT',
      desc: 'Buscador web de una API sobre las películas en las que Owen Wilson dice "WOW", donde podemos filtrar por nombre, año y wow.',
      url: 'https://romerogarcia.github.io/Owen-Wilson-s-WOW/',
      github: 'https://github.com/romerogarcia/Owen-Wilson-s-WOW',
    },
    {
      id: 4,
      nombre: 'Awesome Profile Cards',
      leng: 'HTML, CSS, JS, Responsive',
      desc: 'Generador de tarjetas personalizadas de contacto profesional, donde podemos añadir nuestros datos, descargar la tarjeta y compartirla en redes sociales.',
      url: 'https://romerogarcia.github.io/Awesome-Profile-Cards/',
      github: 'https://github.com/romerogarcia/Awesome-Profile-Cards',
    },
    {
      id: 5,
      nombre: 'Cocktail Finder',
      leng: 'HTML, CSS, JS',
      desc: 'Buscador web desde una API de Cócteles, donde puedes filtrar por nombre y añadir a una lista de favoritos los cócteles que más te gusten.',
      url: 'https://romerogarcia.github.io/Cocktail-finder/',
      github: 'https://github.com/romerogarcia/Cocktail-finder',
    },
    {
      id: 6,
      nombre: 'Open Spaces',
      leng: 'HTML, CSS, Diseño Responsive',
      desc: 'Maquetación web de la empresa Open Spaces especializada en la venta online de productos para el hogar.',
      url: 'https://romerogarcia.github.io/Open-Spaces/',
      github: 'https://github.com/romerogarcia/Open-Spaces',
    },
    {
      id: 7,
      nombre: 'The Walking Coders',
      leng: 'HTML, CSS, Diseño Responsive',
      desc: 'Maquetación de web de contacto de un equipo de trabajo de desarrolladoras frontend.',
      url: 'https://romerogarcia.github.io/The-Walking-Coders/',
      github: 'https://github.com/romerogarcia/The-Walking-Coders',
    },
  ];

  return (
    <>
      <Nav />
      <main className="main-portafolio">
        <section className="portafolio-section">
          {proyectos.map((proy) => {
            return <Project key={proy.id} projects={proy} />;
          })}
        </section>
      </main>
    </>
  );
}

export default Portafolio;
