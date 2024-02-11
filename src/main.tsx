import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import TopBar from './topBar.tsx'
import AbourtMe from './abourMe.tsx'
import Works from './work.tsx'
import Tecnologias from './tecnologias.tsx'
import Contacto from './contacto.tsx'
import Prueba from './prueba.tsx'

ReactDOM.createRoot(
  
  document.getElementById('root')!).render(
  <React.StrictMode>
    <Prueba/>
    <AbourtMe/>
    <br/>
    <br/>
    
    <div style={{
      display: "flex",
      gridTemplateColumns: "repeat(4, 1fr)", /* 4 columnas con igual anchura */
      gap: "10px",
      border: "2px solid rgb(125 58 225)",
      borderRadius: "80px",
      padding: "10px",
      margin: "1px auto",
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 4px",
      flexWrap: "wrap"
      }}>
    <Works
    //icono={<div style={{ display:"inline-flex", gap: '10px' }}><FaGithubAlt  /><FaAndroid/></div>}
  repo="https://github.com/fabian3117/Trenes-Argentinos"
  titulo="Trenes Argentinos AMBA"
  descripcion="Proyecto de obtencion informacion de transporte de la region metropolitana de buenos aires en tiempo real"  
    />

    <Works
      //  icono={<div style={{ display:"inline-flex", gap: '10px' }}><FaReact/><SiMicrosoftazure/><FaGithubAlt/></div>}
  titulo="Portafolio React JS & AZURE"
  repo="https://github.com/fabian3117/ReactTest"
  descripcion="Portafolio de muestra de proyecto utilizando React Js Deployeado utilizando FTPS en azure web"
    />
    
    <Works
        //icono={<div style={{ display:"inline-flex", gap: '10px' }}><FaGithubAlt/></div>}
    titulo="Drivers C/C++ McuExpresso"
    repo="https://github.com/fabian3117/LPC845"
    descripcion="Creacion e implementacion de drivers para LPC845"
    /><Works
    titulo="MiUtn Android version"
    //icono={<div style={{ display:"inline-flex", gap: '10px' }}><FaReact/><SiMicrosoftazure/><FaGithubAlt/></div>}
  descripcion="Proyecto de acompañamiento para el estudiante universitario"
  repo="https://github.com/fabian3117/ProyectoUTN"
    /><Works
    //icono={<div style={{ display:"inline-flex", gap: '10px' }}><FaJava/> <FaReact/><SiMicrosoftazure/><FaGithubAlt/></div>}
    titulo="MiUtn Server Springboot"
    descripcion="Servidor BackEnd para el proyecto MiUtn"
    repo="https://github.com/fabian3117/ServerMiUtn"
    />
    <Works
    //icono={<div style={{ display:"inline-flex", gap: '10px' }}><FaJava/> <FaReact/><SiMicrosoftazure/><FaGithubAlt/></div>}
    titulo="Plataforma .Net ayudante de ingreso universitario"
    descripcion="Plataforma de apuntes para ingreso utn utilizando .Net en azure"
    repo="https://proyectoingresoutnfrba.azurewebsites.net/"
    />

    </div>
    <Tecnologias tecnolog={["React","SpringBoot","Azure","C/C++/C#","Java","Android","GitHub","Markdown","Docker","JavaScript","NodeJs","MongoDB","MySql","Kotlin",".Net","Firebasen"]}/>
   <Contacto/>
  </React.StrictMode>,
)
