import React, { useRef } from 'react';
import Nav from '../Nav/Nav';

import emailjs from 'emailjs-com';

import './Contact.css';

const Contact = () => {
  const form = useRef();

  const enviarEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_gajlmwk',
        'template_o347ao9',
        e.target,
        '4zVLoCCelwQoBtgc-'
      )
      .then((res) => {
        alert('Mensaje enviado');
        console.log(res);
      });
  };

  return (
    <>
      <Nav />
      <main className="main-contact">
        <section className="contact-form">
          <h1>Contacto ✉️</h1>
          <form ref={form} onSubmit={enviarEmail}>
            <label>Nombre</label>
            <br />
            <input
              type="text"
              name="user_name"
              placeholder="Beatriz R."
              required="required"
            />
            <br />

            <label>Email</label>
            <br />
            <input
              type="email"
              name="user_email"
              placeholder="ejemplo@email.com"
              required="required"
            />
            <br />

            <label>Mensaje</label>
            <br />
            <textarea name="message" required="required" />
            <br />
            <input className="btn-submit" type="submit" />
          </form>
        </section>
      </main>
      <footer className="footer">
        <div className="containerIcons">
          <ul className="list">
            <li className="li">
              <a
                className="a"
                href="https://www.linkedin.com/in/noeliaromerogarcia/"
                target="_blank"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li className="li">
              <a
                className="a"
                href="https://github.com/romerogarcia"
                target="_blank"
              >
                <i class="fa-brands fa-github"></i>
              </a>
            </li>
            <li className="li">
              <a
                className="a"
                href="https://www.instagram.com/bluromero/"
                target="_blank"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <p className="footerText">&copy; 2022 🐱 Noelia Romero García</p>
      </footer>
    </>
  );
};

export default Contact;
