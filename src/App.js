import React from 'react';
import Nav from './components/Nav';
import './styles/App.css';

function App() {
  return (
    <>
      <Nav />
      <main className="main-home">
        <div className="text">
          <p>Hello! I'm</p>
          <h1>Noelia Romero</h1>
          <h2>Frontend Web Developer</h2>
        </div>
        <iframe
          src="https://giphy.com/embed/Wj7lNjMNDxSmc"
          width="480"
          height="300"
          frameBorder="0"
          class="giphy-embed"
        ></iframe>
      </main>
    </>
  );
}

export default App;
