import React, { useState } from "react";
import github from './assets/github.svg';
import './App.css'

const AboutMe = () => {
  const [hovered, setHovered] = useState(false);

  let estilos = {
    marginTop: "120px",
    height: "6px",
    padding: "1.5px",
    willChange: "filter",
    transition: "filter 300ms",
    filter: hovered
      ? "drop-shadow(0 0 1em #7E228A)"
      : "drop-shadow(0 0 1em #0B80A3)",
  };
  const EstiloLetras = {
    fontFamily: 'Arial, sans-serif',
   // color: '#333', // Cambia el color del texto según tus preferencias
    fontSize: '1.2rem',
    lineHeight: '1.6',
    maxWidth: '600px', // Ajusta el ancho según tus necesidades
    margin: '0 auto', // Centra el contenido horizontalmente
    padding: '20px', // Agrega espacio alrededor del contenido
    border: '1px solid #ddd', // Agrega un borde para resaltar el contenido
    borderRadius: '8px', // Añade bordes redondeados
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Agrega una sombra sutil
  };
  return (
    <React.Fragment>
        <div >
        <section id="sobre-mi">
            <div style={{display:"flex"}}>
        <a href="https://github.com/fabian3117" target="_blank">
          <img src={github} className="logo react" alt="React logo" />
        </a>
      <h1
        style={estilos}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>
        Federico Nahuel Fabian Gonzalez
      </h1>
      </div>
      <br />
      <br/>
    <br/>
      <div style={EstiloLetras}>
      <p>
        ¡Hola! ¡Muchas gracias por visitarme!
      </p>
      <p>
        Soy un autodidacta apasionado por la tecnología, siempre en busca de aprender y mejorar mis habilidades.
      </p>
      <p>
        Con la mira en avanzar y adquirir nuevas habilidades tanto tecnicas como interpersonales.
      </p>
      <p>
        Poseo experiencia en diversas tecnologías y he desarrollado proyectos de manera independiente.
      </p>
      <p>
        Siempre estoy dispuesto a aplicar mis conocimientos para resolver desafíos y encontrar soluciones.
      </p>
      <p>
        Desde la creación de una nueva versión de una aplicación de transporte ampliamente utilizada en el Área Metropolitana de Buenos Aires hasta el desarrollo de una aplicación para abordar inconvenientes en mi experiencia universitaria.
      </p>
      <p>
        Me considero un entusiasta de la filosofía Open Source.
      </p>
      <p>
        Espero que naveges por mis repositorios de git para ver mi trabajo.
      </p>
      <p>
        Feedback siempre es bien recibido y apreciado.
      </p>
    </div>
 </section>
 
      </div>
    </React.Fragment>
  );
};

export default AboutMe;
