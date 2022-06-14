import React from 'react';

import Nav from './Nav';
import Project from './Project';

import '../styles/Portfolio.css';

function Portafolio() {
  const proyectos = [
    {
      id: 1,
      nombre: 'Bubble',
      leng: 'HTML, CSS, Responsive Design',
      desc: 'Web layout for the company Bubble, specialized in the online sale of bubble tea beverages.',
      url: 'https://romerogarcia.github.io/Bubble/',
      github: 'https://github.com/romerogarcia/Bubble',
    },
    {
      id: 2,
      nombre: 'Rick and Morty',
      leng: 'HTML, CSS, JS, API, REACT',
      desc: 'Web search engine of an API about the characters of the Rick and Morty series, where we can filter by name, gender and status.',
      url: 'https://romerogarcia.github.io/Rick-and-Morty/',
      github: 'https://github.com/romerogarcia/Rick-and-Morty',
    },
    {
      id: 3,
      nombre: 'Refactoring: Awesome Profile Cards',
      leng: 'Node JS, Express JS, SQL',
      desc: 'Refactoring with React of a legacy project. Creation of a basic server, a database and publication in Heroku.',
      url: 'https://project-module-4-team-6.herokuapp.com/',
      github:
        'https://github.com/romerogarcia/Refactoring-Awesome-Profile-Cards',
    },
    {
      id: 4,
      nombre: 'Owen Wilson´s WOW',
      leng: 'HTML, CSS, JS, API, REACT',
      desc: 'Web search engine of an API about movies in which Owen Wilson says "WOW", where we can filter by name, year and wow.',
      url: 'https://romerogarcia.github.io/Owen-Wilson-s-WOW/',
      github: 'https://github.com/romerogarcia/Owen-Wilson-s-WOW',
    },
    {
      id: 5,
      nombre: 'Awesome Profile Cards',
      leng: 'HTML, CSS, JS, Responsive Design',
      desc: 'Generator of personalized professional contact cards, where we can add our data, download the card and share it on social networks.',
      url: 'https://romerogarcia.github.io/Awesome-Profile-Cards/',
      github: 'https://github.com/romerogarcia/Awesome-Profile-Cards',
    },

    {
      id: 6,
      nombre: 'Cocktail Finder',
      leng: 'HTML, CSS, JS',
      desc: 'Web search engine from a Cocktails API, where you can filter by name and add the cocktails you like the most to a list of favorites.',
      url: 'https://romerogarcia.github.io/Cocktail-finder/',
      github: 'https://github.com/romerogarcia/Cocktail-finder',
    },

    {
      id: 7,
      nombre: 'Friends Quotes',
      leng: 'HTML, CSS, JS',
      desc: 'Layout from a Friends API, where you can filter by phrase and character, and also add a new phrase.',
      url: 'https://romerogarcia.github.io/Friends-Quotes/',
      github: 'https://github.com/romerogarcia/Friends-Quotes',
    },

    {
      id: 8,
      nombre: 'Open Spaces',
      leng: 'HTML, CSS, Responsive Design',
      desc: 'Web layout for Open Spaces, a company specialized in the online sale of household products.',
      url: 'https://romerogarcia.github.io/Open-Spaces/',
      github: 'https://github.com/romerogarcia/Open-Spaces',
    },
    {
      id: 9,
      nombre: 'The Walking Coders',
      leng: 'HTML, CSS, Responsive Design',
      desc: 'Contact web layout for a team of frontend developers.',
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
